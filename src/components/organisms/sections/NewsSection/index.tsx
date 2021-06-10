//> Additional modules
//> Additional modules
// Parallax
// import { Parallax } from "react-scroll-parallax";

// Parallax
// Scroll
// import { Link } from "react-scroll";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBRow,
  MDBCol,
  // MDBBtn,
  // MDBIcon,
  // MDBContainer
} from 'mdb-react-ui-kit';

//> CSS
import "./index.scss";

//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";

// Placeholder image


interface Props {
    sectionData: object
  }

const NewsSection = ({sectionData}: Props): JSX.Element => {
    let loaded = false
  

    console.log(loaded)
    console.log(sectionData)

    return (
      <div className="map">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" className="mb-3 col-timeline">
            lol
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
  
  export default NewsSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
