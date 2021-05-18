import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, NavbarBrand, NavItem } from 'reactstrap';


class Head extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wesee: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.displayMenu = this.displayMenu.bind(this);
    }

    showMenu() {
        this.setState({
            wesee: !this.state.wesee
        });
    }

    displayMenu() {
        if(this.state.wesee) {
            return(<div className="sideshow" style={{marginLeft: '2%'}}>
                <Nav navbar>
            <NavItem>
                    <NavLink className="navigate" to='/home'><i className='fa fa-home fa-lg'></i> Home</NavLink>
                </NavItem>
                <br />
                <NavItem>
                    <NavLink className="navigate" to='/profiles'><i className='fa fa-users fa-lg'></i> Profiles</NavLink>
                </NavItem>
                <br />
                <NavItem>
                    <NavLink className="navigate" to='/skills'><i className='fa fa-briefcase fa-lg'></i> Skills</NavLink>
                </NavItem>
        </Nav>
        <br />
            </div>);
        }
        else {
            return(<></>)
        }
    }
    render() {
    return (
        <div className='row'>
            <div className='col-3'>
                <NavbarBrand href='/'>
            <h1>Skill-site</h1>
            <p style={{textIndent: '10%'}}>Let's show our talent here!</p>
        </NavbarBrand>
            </div>
        <div className='col saw'>
        <Nav style={{float: 'right', margin: '5%', width: '25%'}}>
            <NavItem>
                    <NavLink className="navigate" to='/home'><i className='fa fa-home fa-lg'></i> Home</NavLink>
                </NavItem>
                <span className='space'></span>
                <NavItem>
                    <NavLink className="navigate" to='/profiles'><i className='fa fa-users fa-lg'></i> Profiles</NavLink>
                </NavItem>
                <span className='space'></span>
                <NavItem>
                    <NavLink className="navigate" to='/skills'><i className='fa fa-briefcase fa-lg'></i> Skills</NavLink>
                </NavItem>
        </Nav>
        </div>
        <div className="col butsaw">
            <button style={{float: 'right', margin: '5%'}} onClick={this.showMenu}>Click</button>
        </div>
        {this.displayMenu()}
        </div>
    );
    }
}

export default Head;
