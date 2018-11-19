import React, { Component } from 'react'
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container 
} from 'reactstrap'

import vatcherylogo from '../assets/vatchery-logo.png'

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color='light' light expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href="/">
              <img src={vatcherylogo} alt='vatchery-logo' width='20%' style={{marginRight: '1rem'}}/>
              Vatchery
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='https://github.com/billie-badger/mern-shopping-list.git'>Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar
