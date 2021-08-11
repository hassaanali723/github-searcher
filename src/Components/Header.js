import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {

    onLogin(){
        this.props.onLogin();
    }

    onLogout(){
        this.props.onLogout();
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let page;
        if(this.props.idToken){
            page = <Nav.Link onClick={this.onLogout.bind(this)} href="#">Logout</Nav.Link>
        }
        else {
            page = <Nav.Link onClick={this.onLogin.bind(this)} href="#">Login</Nav.Link>
        }
        return ( 
            
        <div>
          <Navbar>
              <Container>
                  <Navbar.Brand>
                      Github Searcher
                  </Navbar.Brand>
            
              </Container>
             <Nav>
                 <NavItem>
                   {page}
                 </NavItem>
             </Nav>
          </Navbar>
          </div>
         );
    }
}
 
export default Header;