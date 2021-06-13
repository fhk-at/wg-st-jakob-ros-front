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
  MDBContainer
} from 'mdb-react-ui-kit';

// import {
//   MDBView,
//   MDBMask,
//   MDBAnimation
// } from "../../../legacy";

//> CSS
import "./index.scss";





interface Props {
  maincontent1: React.ReactNode
  maincontent2: React.ReactNode
}

const ConnectSection = ({maincontent1,maincontent2}: Props): JSX.Element => {

    return (
      <div className="connect">
        <MDBContainer className="p-5">
          <MDBRow className="justify-content-center">
            <MDBCol md="9" className="m-0 col-connect-1">
              <p>{maincontent1}</p>
            </MDBCol>
            <MDBCol md="9" className="m-0 col-connect-2">
              <p>{maincontent2}</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
  
  export default ConnectSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
