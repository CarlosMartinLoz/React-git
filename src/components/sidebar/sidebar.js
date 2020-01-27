import React from "react";
import { Component } from "react";
import { } from "./sidebar.css";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default class Sidebar extends Component {
    
    render() {
        return (

            <SideNav style={{
                position: 'fixed',
                overflow: 'auto'
            }}
                onSelect={(selected) => {

                }}
            >
                <SideNav.Nav defaultSelected="home">
                    <NavItem>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
            </NavText>
                    </NavItem>

                    <NavItem eventKey="login">
                        <NavIcon>
                            <i className="fas fa-sign-in-alt" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
            </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav >

        );
    }
}