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
  // import Drop from "@common/img/content/water/drop.png";
  // import Faucet from "@common/img/content/water/faucet.png";
  // import Fountain from "@common/img/content/water/fountain.png";
  // import Glass from "@common/img/content/water/glass.png";
  
  interface Props {
        cmsData: [
          [any, any, any, any],
          [any, any, any, any]
        ]
    }
  
  const GridTable = ({cmsData}: Props): JSX.Element => {
  
      console.log(cmsData)
  
      return (
        <div className="cmstable">
          <MDBRow className="justify-content-center">
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[0][0] }}></p>
            </MDBCol>
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[0][1] }}></p>
            </MDBCol>
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[0][2] }}></p>
            </MDBCol>
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[0][3] }}></p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[1][0] }}></p>
            </MDBCol>
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[1][1] }}></p>
            </MDBCol>
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[1][2] }}></p>
            </MDBCol>
            <MDBCol md="3" className="col-cmstable">
              <p dangerouslySetInnerHTML={{ __html: cmsData[1][3] }}></p>
            </MDBCol>
          </MDBRow>
        </div>
      )
    }
    
    export default GridTable
  
  /**
   * SPDX-License-Identifier: (EUPL-1.2)
   * Copyright © 2020 Werbeagentur Christian Aichner
   */
  