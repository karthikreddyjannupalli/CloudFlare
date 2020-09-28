import React, {Component} from 'react';
import { Button, Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            isNavOpen: false
        }
        this.navtoggle=this.navtoggle.bind(this);
    }
    navtoggle(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <div>
                <Navbar className="fixed-top" dark expand="xl">
                    <div className="container">
                        <NavbarToggler onClick={this.navtoggle} >
                        <span><i className="fa fa-2x fa-toggle-down"></i></span>
                        </NavbarToggler>
                        <NavbarBrand href="/">
                            <img src="assets/logo.png" height='50' width='65' alt="cloud flare"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem >
                                <NavLink className="nav-link btn btn-primary" to="/products"> 
                                Products
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link btn btn-primary" to="/solutions"> 
                                Solutions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link btn btn-primary" to="/resources"> 
                                Resources
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link btn btn-primary" to="/developer"> 
                                Developer
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link btn btn-primary" to="/forenterprise"> 
                                For Enterprise
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link btn btn-primary" to="/pricing"> 
                                Pricing
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto">
                        <NavItem>
                                <NavLink className="nav-link btn bg-primary" to="/login"> 
                                <span className="fa fa-lg fa-sign-in"> Login</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link btn btn-primary" to="/signup"> 
                                <span className="fa fa-lg fa-user-plus"> Signup</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link attack btn btn-warning" to="/underattack">
                                <span className='fa fa-lg'> Under Attack ?</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>
                                    What Would You like to do with Cloudflare today?
                                </h1>
                                <Button className="btn btn-primary col-sm-5 mr-2 mb-2">Add website or application</Button>
                                <Button className="btn btn-primary col-sm-5 mb-2">Secure a remote team</Button>
                                <Button className="btn btn-primary col-sm-5 mr-2">Build seamless application</Button>
                                <Button className="btn btn-primary col-sm-5 mr-2">Register a domain</Button>
                            </div>
                            <div className="col-12 col-sm-6">
                                <img className="img" src="assets/pic.png"></img>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;