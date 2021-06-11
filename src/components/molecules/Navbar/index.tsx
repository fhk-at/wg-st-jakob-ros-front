// React Router DOM bindings
//import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  //MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBBtn,
  // MDBDropdown,
  // MDBDropdownToggle,
  // MDBDropdownMenu,
  // MDBDropdownItem,
  // MDBDropdownLink,
  //MDBCollapse
} from 'mdb-react-ui-kit';

import {
  MDBNavbar,
  MDBCollapse
} from "@components/legacy";

import {useState} from 'react'

import './index.scss'

import Logo from '@common/logo.svg';

interface Props {
  logoUrl?: string
  logoAlt?: string
  showMenu?: boolean
}

const Navbar = ({
  logoUrl = Logo,
  logoAlt = 'tuwien club'
}: Props) => {

  const [showNavbar, setShowNavbar] = useState(false);
  //const activePath = window.location.pathname
  
  return (
    <>
      <MDBNavbar
        light
        color="grey lighten-4"
        fixed="top"
        expand="lg"
        scrolling
        transparent
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img src={logoUrl} alt={logoAlt} className="navlogo" />
          </MDBNavbarBrand>
          <MDBNavbarBrand className="navtitle d-block d-lg-none">WG St. Jakob i. Ros.</MDBNavbarBrand>
          <div>
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <MDBIcon icon='bars' size='lg' />
            </MDBNavbarToggler>
          </div>
          <MDBCollapse isOpen={showNavbar} navbar>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  Über uns
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#me"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  Wasseranschluss
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#products"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  Wasser
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#products"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  Kosten
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#products"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  Wasserzähler
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#products"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  Kontakt
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/*<MDBNavbarItem>
                <MDBNavbarLink
                  href="/profile"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  Konhref
                </MDBNavbarLink>
              </MDBNavbarItem>*
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="/cart"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  <span className="d-flex align-items-center">
                    <MDBIcon
                      icon="shopping-basket"
                      className="mr-1 d-inline-block"
                    />
                    Kontakt
                    {this.props.checkout &&
                      this.props.checkout.lineItems &&
                      this.props.checkout.lineItems.edges.length > 0 && (
                        <span className="counter ml-1">
                          {this.getCartCount()}
                        </span>
                      )}
                  </span>
                </MDBNavbarLink>
                      </MDBNavbarItem>*/}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
