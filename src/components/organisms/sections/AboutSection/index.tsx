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

import {GridTable} from '@components/molecules'

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

interface Props {
  maincontent1: React.ReactNode
}

const AboutSection = ({maincontent1}: Props): JSX.Element => {

    return (
      <div className="about">
        <MDBContainer className="p-5">
          <MDBRow className="justify-content-center">
            <MDBCol md="9" className="mb-3 col-about">
              <p>{maincontent1}</p>
              <p>
                <GridTable cmsData={[["<h3>1.320</h3><p>Ständig versorgte Einwohner</p>","<h3>470</h3><p>Wasserabnehmer bzw. Mitglieder</p>", "<h3>550 <i>m³</i></h3><p>Mittlerer Wasserbedarf pro Tag</p>", "<h3>100.000 <i>m³</i></h3><p>Mittlerer Wasserbedarf pro Jahr</p>"],["<h3>750 <i>m³</i></h3><p>Speicherkapazität aller Hochbehälter</p>","<h3>220 <i>m³</i></h3><p>Löschwasserreserve</p>","<h3>15 <i>km</i></h3><p>Versorgungsnetz (ohne Hausanschlussleitungen)</p>","<h3>285.000 <i>kWh</i></h3><p>Jährlicher Stromertrag aus dem Trinkwasser­kraftwerk: pro Jahr</p>"]]}/>
              </p>
              {/* <table border="0" cellpadding="0" cellspacing="0" class="key-data">
                <tbody>
                  <tr>
                    <td>
                      <h1>1.320</h1>
                      <p>Ständig versorgte Einwohner</p>
                      </td>
                      <td>
                        <h1>470</h1>
                        <p>Wasserabnehmer bzw. Mitglieder</p>
                      </td>
                      <td><h1>550 <em>m³</em></h1>
                      <p>Mittlerer Wasserbedarf pro Tag</p>
                      </td>
                      <td>
                        <h1>100.000 <em>m³</em></h1>
                        <p>Mittlerer Wasserbedarf pro Jahr</p>
                      </td>
                    </tr>
                    <tr>
                      <td><h1>750 <em>m³</em></h1>
                      <p>Speicherkapazität aller Hochbehälter</p>
                    </td>
                    <td>
                      <h1>220 
                        <em>m³
                          </em>
                          </h1>
                          <p>Löschwasserreserve</p>
                          </td>
                          <td
                          ><h1>15 
                            <em>km</em>
                            </h1><p>Versorgungsnetz (ohne Hausanschlussleitungen)</p></td><td><h1>285.000 <em>kWh</em></h1><p>Jährlicher Stromertrag aus dem Trinkwasser­kraftwerk: pro Jahr</p></td></tr></tbody></table>

 */}
            </MDBCol>
          </MDBRow>
          
        </MDBContainer>
      </div>
    )
  }
  
  export default AboutSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
