import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

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
      <li className={activeClassName}><Link to={href}>{title}</Link></li>
    );
  }
}

function mapToNavItem(item, index) {
  return <NavItem key={index} href={item.href} title={item.title} />;
}

export function Nav({items}) {
  return (
    <NavPure>
      { items && items.map(mapToNavItem) }
    </NavPure>
  );
}
