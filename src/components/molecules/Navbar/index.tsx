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

import { Link, /*scroller*/} from "react-scroll";
import {useHistory} from 'react-router'
import {useCMSContext} from '@snek-shipyard/jaen-cms/lib/contexts/context'
import pickBy from 'lodash/pickBy'

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
  // navindex1: React.ReactNode
}

const Navbar = ({
  logoUrl = Logo,
  logoAlt = 'tuwien club',
  // navindex1
}: Props): JSX.Element => {
  const [showNavbar, setShowNavbar] = useState(false);
  
  const history = useHistory()
  const cmsContext = useCMSContext()
  //const pageContext = useCMSPageContext()

  const getKeyFromSlug = (slug: string) => {
    const refs = cmsContext.keyRefs?.indexKey
    
    
    
    return Object.keys(pickBy(refs, page => page.slug === slug))[0] || ''
  }

  const navHandler = (slug: string, /*position: string, offset: number*/) => {

    setShowNavbar(false)
    history.push(getKeyFromSlug(slug))
    //scroller.scrollTo(position, offset)
  }




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
                <Link onClick={() => navHandler("home", /*"about", 300*/)} 
                      data-test="nav-link"
                      className="nav-link"
                      to="about"
                      offset={-90}
                      smooth={true}
                      spy={true}
                      duration={300}>  
                  Über uns
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link onClick={() => navHandler("home", /*"about", 300*/)}
                      data-test="nav-link"
                      className="nav-link"
                      to="connect"
                      offset={-90}
                      smooth={true}
                      spy={true}
                      duration={300}
                >  
                  Wasseranschluss
                </Link>
              </MDBNavbarItem>
              {/* {navindex1} */}
              <MDBNavbarItem>
                <Link onClick={() => navHandler("home", /*"about", 300*/)}
                      data-test="nav-link"
                      className="nav-link"
                      to="emergency"
                >  
                  Notfall
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link onClick={() => navHandler("home", /*"about", 300*/)} data-test="nav-link" className="nav-link" to="col-connect-2" offset={-200} smooth={true} spy={true} duration={300}>  
                  Kosten
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => navHandler("online-wasserleser", /*"about", 300*/)}
                >
                  Wasserzähler
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#products"
                  onClick={() => navHandler("kontakt", /*"about", 300*/)}
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
