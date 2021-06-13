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
  MDBBtn,
  MDBIcon,
  MDBContainer
} from 'mdb-react-ui-kit';

// import {
//   MDBView,
//   MDBMask,
//   MDBAnimation
// } from "../../../legacy";

//> CSS
import "./index.scss";

//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";

// Placeholder image
//import Drop from "@common/img/content/water/drop.png";
//import Faucet from "@common/img/content/water/faucet.png";
// import Fountain from "@common/img/content/water/fountain.png";
// import Glass from "@common/img/content/water/glass.png";
import Hand from "@common/img/content/water/hand.png";
import Hydrant from "@common/img/content/water/hydrant.png";
import Quality from "@common/img/content/water/quality.png";

interface Props {
    maincontent1: React.ReactNode
    columnheading1: React.ReactNode
    columnheading2: React.ReactNode
    columnheading3: React.ReactNode
    columncontent1: React.ReactNode
    columncontent2: React.ReactNode
    columncontent3: React.ReactNode
    button1: React.ReactNode
  }

const IntroSection = ({maincontent1, columnheading1, columnheading2, columnheading3, columncontent1, columncontent2, columncontent3, button1}: Props): JSX.Element => {
    return (
      <div className="intro">
        <MDBContainer className="p-5">
          <MDBRow className="justify-content-center">
            <MDBCol md="9" className=" mb-3 col-features">
              <p>{maincontent1}</p>
              <hr/>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="3" className="text-center mb-3 col-features">
              <img
                src={Hand}
                alt={columnheading1 + " image"}
                className="img-fluid mb-3"
              />
              <p className="lead">{columnheading1}</p>
              <hr />
              <p>{columncontent1}</p>
            </MDBCol>
            <MDBCol md="3" className="text-center mb-3 col-features">
              <img
                src={Hydrant}
                alt={columnheading2 + " image"}
                className="img-fluid mb-3"
              />
              <p className="lead">{columnheading2}</p>
              <hr />
              <p>{columncontent2}</p>
            </MDBCol>
            <MDBCol md="3" className="text-center mb-3 col-features">
              <img
                src={Quality}
                alt={columnheading3 + " image"}
                className="img-fluid mb-3"
              />
              <p className="lead">{columnheading3}</p>
              <hr />
              <p>{columncontent3}</p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol md="9" className="text-center mb-3 col-features">
              <MDBBtn color="white" size="lg" rounded>
                {button1}
                <MDBIcon
                  icon="arrow-right"
                  className="ps-2 fa-lg"
                />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
  
  export default IntroSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
