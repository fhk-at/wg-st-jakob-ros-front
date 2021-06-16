import {Navbar} from '@components/molecules'
//import {IndexField} from '@snek-shipyard/jaen-cms'

import './index.scss'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
// import {
//   MDBNavbarLink,
//   MDBNavbarItem
// } from 'mdb-react-ui-kit';


const NavbarHeader = (): JSX.Element => {
  
  return (
    
    <header>
      <Navbar/>
      {/* <Navbar navindex1 = {<IndexField
              fixedSlug = "home"
              outerElement={() => <div />}
              renderItem={(item, key, navigate) => (
                <MDBNavbarItem className="d-inline-block">
                  <MDBNavbarLink
                    onClick={() => navigate()}
                    key={key}
                  >
                    {item.title}
                  </MDBNavbarLink>
                </MDBNavbarItem>
            )}
        />}
      /> */}
    </header>
  )
}

export default NavbarHeader
