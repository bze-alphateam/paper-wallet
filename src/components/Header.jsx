import React, { Component }     from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logoFull from "../logo_full.png";

export default class Header extends Component {

    render() {
        return (
            <Navbar id="header" className="btczHeader" fluid={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={logoFull} alt="logo"/>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem href="https://github.com/BZEdge/paper-wallet" target="_blank" className="nav-item headerLeftOption">Source</NavItem>
                    <NavItem href="https://explorer.getbze.com/insight" target="_blank" className="nav-item headerLeftOption">Explorer</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
