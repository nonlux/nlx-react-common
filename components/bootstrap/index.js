import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import {
  Openable
} from 'components/common';

export function Container({className, children, fluid}) {
  const nextClassName = classnames({
    className,
    container: !fluid,
    'container-fluid': fluid
  });

  return (<div className={nextClassName}>{children}</div>);
}

export function Navbar({children}) {
  return (
    <nav className="navbar navbar-default">
      <Container fluid>
        {children}
      </Container>
    </nav>
  );
}

export function CollapseButton() {
  return (
      <button
        type="button"
        className="navbar-toggle collapsed"
        >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </button>
  );
}


export function NavbarHeader({brand}) {
  return (
    <div className="navbar-header">
      <CollapseButton/>
      <a className="navbar-brand" href="#/">{brand}</a>
    </div>
  );
}

export function NavbarSimple({brand, items}) {
  return (
    <Navbar>
      <NavbarHeader brand={brand} />
      <NavbarBody>
        <Nav items={items} />
      </NavbarBody>
    </Navbar>
  );
}
export function NavbarBody({children}) {
  return (
    <div className="collapse navbar-collapse">
      {children}
    </div>
  );
}


export function NavPure({children}) {
  return (
    <ul className="nav navbar-nav">
      {children}
    </ul>
  );
}


function resolveToLocation(to, router) {
  return typeof to === 'function' ? to(router.location) : to;
}

export function LiItem({title, href, className, onClick}) {
  return (
    <li className={className}><Link onClick={onClick} to={href}>{title}</Link></li>
  );
}


export class NavItem extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
    super(props, context);
    this.router = context.router;
  }
  render(){
    const {href, title} = this.props;
    let isActive = false;
    if (this.router) {
      isActive = this.router.isActive(resolveToLocation(href,this.router) , false);
    }
    const activeClassName = isActive ? 'active' : '';
    return (
      <LiItem className={activeClassName} href={href} title={title} />
    );
  }
}

function mapToNavItem(item, index) {
  return <NavItem key={index} {...item} />;
}

export function Nav({items}) {
  return (
    <NavPure>
      { items && items.map(mapToNavItem) }
    </NavPure>
  );
}


export function Row({children}) {
  return (
    <div className="row">{children}</div>
  );
}

export function Col({children, md, className}) {
  const mdClass = md ? `col-md-${md}` : '';
  const nextClassName = classnames(className, mdClass);
  return (
    <div className={nextClassName}>{children}</div>
  );
}

export function RowFull({children}) {
  return (
    <Row>
      <Col md="12">
        {children}
      </Col>
    </Row>
  );
}

export function Icon({icon, empty}) {
  const iconClass = `glyphicon-${icon}`;
  const className = classnames('glyphicon', iconClass, {
    'glyphicon-empty': empty,
  });
  return (
    <span className={className} />
  );
}


export function Button({
  children,
  btnStyles,
  className,
  icon,
  ...rest}) {
  const btnClassNames = ['btn'];
  let styles = [];
  if (btnStyles) {
     styles = btnStyles.split(' ');
  }
  else {
    styles.push('default');
  }
  styles.forEach((style) => { btnClassNames.push(`btn-${style}`); });
  const nextClassName = classnames(className, btnClassNames);

  return (
    <button className={nextClassName} {...rest}>
      {icon ? <Icon icon={icon} empty/> : ''}
      {children}
    </button>
  );
}

export function ButtonGroup({children, open, className, onBlur}) {
  const nextClassName = classnames(className, {
    'btn-group': true,
    open: open
  });

  return (
    <div className={nextClassName} onBlur={onBlur}>
      {children}
    </div>
  );
}

export function Caret() {
  return (
    <span className="caret"></span>
  );
}

export function DropdownStatic({items, onToggle, onClose, btnStyles, title, open, onSelect, ...props}) {
  const handleSelect = (item) => { onClose(); onSelect(item); };
  const handleBlur = function() {
    console.log('bluz');
    onClose();
  };
  return (
    <ButtonGroup open={open}>
      <Button btnStyles={btnStyles} onClick={onToggle}>
        {title}
        <span>&nbsp;</span>
        <Caret />
      </Button>
      <DropdownMenu items={items} onSelect={handleSelect} onBlur={handleBlur} {...props} />
    </ButtonGroup>
  );
}


export function DropdownMenuPure({children, onBlur}) {
  return (
    <ul className="dropdown-menu" onBlur={onBlur}>
      {children}
    </ul>
  );
}

function mapToLiItem(onClick) {
  return (item, index) => {
    return (
      <LiItem key={index} {...item} onClick={() => onClick(item)}  />
    );
  };
}
export function DropdownMenu({items, onSelect, children, ...props}) {
  const mapItems = mapToLiItem(onSelect);
  return (
    <DropdownMenuPure {...props}>
      {items && items.map(mapItems)}
      {children}
    </DropdownMenuPure>
  );
}
export function Dropdown(props) {
  return (
    <Openable>
      <DropdownStatic {...props} />
    </Openable>
  );
}

export function Form({children, formStyle, onSubmit, ...props}) {
  let styles = [];
  if (formStyle) {
    styles = formStyle.split(' ');
  }
  let formClassNames = [];
  styles.forEach((style) => { formClassNames.push(`form-${style}`); });
  formClassNames = classnames(formClassNames);

  let handleSubmit = () => {};

  if (onSubmit) {
    handleSubmit = (event) => {
      event.preventDefault();
      const elements = event.target.elements;
      const values = {};
      const setValues = ({name, value}) => {
        if (name) { 
          values[name] = value;
        }
      };
      for (let i = elements.length; i--;) {
        setValues(elements[i]);
      }
      onSubmit(values);
      event.target.reset();
      return false;
    };
  }

  return (
    <form className={formClassNames} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
}
export function FormInline({children, ...rest}) {
  return (
    <Form formStyle="inline" {...rest} >
      {children}
    </Form>
  );
}


export function FormGroup({children}) {
  return (
    <div className="form-group">
      {children}
    </div>
  );
}

export function Label({label, id}) {
  return (
    <label htmlFor={id}>{label}</label>
  );
}

export function FormControlInput(props) {
  const className = 'form-control';
  return (
    <input  className={className} {...props} />
  );
}

export function OneFieldForm({onSubmit, ...props}) {
  return (
    <FormInline onSubmit={onSubmit}>
      <InputGroup btnStyles="success" {...props} btnType="submit" />
    </FormInline>
  );
}

export function SubmitButton({children, ...rest}) {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
}

export function InputGroupPure({children}) {
  return (
    <div className="input-group">
      {children}
    </div>
  );
}

export function InputGroupButton(props) {
  return (
    <span className="input-group-btn">
      <Button {...props} />
    </span>
  );
}

export function InputGroup(props) {
  const {icon, btnStyles, btnType = 'button', ...inpProps} = props;
  const btnProps = {
    icon,
    btnStyles,
    type: btnType,
  };

  return (
   <InputGroupPure>
     <FormControlInput {...inpProps}/>
     <InputGroupButton {...btnProps}/>
   </InputGroupPure> 
    
  );
}


export function FormGroupInput({label, id, ...rest}) {
  return (
    <FormGroup>
      { label && <Label id={id} label={label} />}
      <FormControlInput id={id} {...rest} />
    </FormGroup>
  );
}
