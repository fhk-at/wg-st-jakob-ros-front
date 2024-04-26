import {
  MDBFooter,
  //MDBContainer,
  // MDBIcon,
} from 'mdb-react-ui-kit'

// import React from 'react'

import './index.scss'

//import EmailField from '@components/molecules/EmailForm'
//import { Link, /*scroller*/} from "react-scroll";
import {useHistory} from 'react-router'
import {useCMSContext} from '@snek-shipyard/jaen-cms/lib/contexts/context'
import pickBy from 'lodash/pickBy'


interface Props {
  copyrightText: string
  copyrightUrl: string
}

// const AdvancedFooterold = ({ copyrightText, copyrightUrl }: Props) => {
//   return (
    
//     <MDBFooter color="white" className="font-small text-dark pt-4">
//       <div className="footer-copyright text-center py-3 text-dark">
//         <MDBContainer fluid>
//           <div>
//           <div className="footer-copyright text-center py-2">
        
//         <a className="text-white" href={copyrightUrl}>
//           {copyrightText}
//         </a>
//       </div>
//             &copy; {new Date().getFullYear()} Copyright:{' '}
//             <p className="my-2 font-weight-bold">
//               Made with
//               <i
//                 className="fas fa-heart pulse blue-text ml-1 mr-1"
//                 aria-hidden="true"
//               ></i>
//               by
//               <a className="text-white" href={copyrightUrl}>
//               {copyrightText}
//             </a>
//             </p>
//           </div>
//           <div>
//             <small>
//               Stable release
//               <span className="pl-2 pr-2">·</span>
//               Version v{process.env.REACT_APP_VERSION}
//               <span className="pl-2 pr-2">·</span>
//               <a
//                 href="https://github.com/blue-lupi/kaffeerudel"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 className="text-dark"
//               >
//                 <MDBIcon fab icon="github" className="pr-2" />
//                 View on GitHub
//               </a>
//               <span className="pl-2 pr-2">·</span>
//               <a
//                 href="https://github.com/blue-lupi/kaffeerudel/issues/new?template=bug_report.md"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 className="text-dark"
//               >
//                 <MDBIcon icon="bug" className="pr-2" />
//                 Report bug
//               </a>
//             </small>
//           </div>
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   )
// }
const AdvancedFooter = ({ copyrightText, copyrightUrl }: Props) => {
  console.log(copyrightText)
  console.log(copyrightUrl)
  const history = useHistory()
  const cmsContext = useCMSContext()
  //const pageContext = useCMSPageContext()

  const getKeyFromSlug = (slug: string) => {
    const refs = cmsContext.keyRefs?.indexKey
    
    return Object.keys(pickBy(refs, page => page.slug === slug))[0] || ''
  }

    const navHandler = (slug: string, /*position: string, offset: number*/) => {

    history.push(getKeyFromSlug(slug))
    //scroller.scrollTo(position, offset)
  }

  return (
    
  <MDBFooter backgroundColor='light' className='text-lg-start text-muted border-top'>
    {/* <div className="sitemap"></div> */}

    {/* <MDBContainer className="p-4">
      <EmailField/>
    </MDBContainer> */}

    <section
      className="d-flex d-none justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      

      
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github"></i>
        </a>
      </div>
      
    </section>
    

    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              WG ST. DOMINIK I. ROS.
            </h6>
            <p>
            Zweck der Genossenschaft ist die Wasserversorgung der genossenschaftlichen Grundstücke und Anlagen.
            </p>
          </div>
          

          
          
          

          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              Nützliche Links
            </h6>
            <p>
              <a onClick={() => navHandler("online-wasserleser", /*"about", 300*/)} className="text-reset">Online Wasserleser</a>
            </p>
            <p>
              <a onClick={() => navHandler("datenschutz", /*"about", 300*/)} className="text-reset">Datenschutzerklärung</a>
            </p>
            <p>
              <a onClick={() => navHandler("kontakt", /*"about", 300*/)} className="text-reset">Impressum</a>
            </p>
          </div>
          

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              Dokumente
            </h6>
            <p>
              <a href="#!" className="text-reset">Anschlussantrag</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Abbuchungsauftrag</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Untersuchungszeugnis</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Wasserverordnung</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Notfallplan</a>
            </p>
          </div>

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              Kontakt
            </h6>
            <p><i className="fas fa-home me-3"></i>9184, Trattenweg 30</p>
            <p><i className="fas fa-envelope me-3"></i> wg.st.jakob.ros@gmail.com</p>
            <p><i className="fas fa-phone me-3"></i> + 43 676 424 8576</p>
            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div className="text-center p-4">
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="mailto:kleberbaum@erebos.xyz">Florian Kleber</a>
    </div>
    
  </MDBFooter>

  )
}

export default AdvancedFooter
