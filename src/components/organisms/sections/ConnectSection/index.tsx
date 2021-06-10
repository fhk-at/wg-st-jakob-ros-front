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
    sectionData: object
  }

const ConnectSection = ({sectionData}: Props): JSX.Element => {
    let loaded = false
    const data = {
      features: [{
      	value: {
            feature_image: Quality,
            feature_head: "Hochwertig",
            feature_lead: "Dank unsere UVGI-Wasseraufbereitung ist unser Wasser garantiert immer keimfrei. Weil Sicherheit kennt keinen Preis."
          }
        },
      {
        value: {
          feature_image: Hand,
          feature_head: "Leistbar",
          feature_lead: "Die Preise werden so niedrig wie möglich gehalten weil das Recht auf Zugang zu sauberem Wasser ist ein Menschenrecht."
        }
      },
      {
        value: {
          feature_image: Hydrant,
          feature_head: "Krisensicher",
          feature_lead: "Sie können sich darauf verlassen, dass wir alles unternehmen damit eine unterbrechungsfreie versorgung möglich ist."
        }
      }],
      sectionData: sectionData,
      buttonTitle: "WASSERANSCHLUSS beantragen",
      body: {
        intro: {
          rawValue: "<p> </p><h1>BESONDEREN BEDEUTUNG DES WASSERS FÜR ST. JAKOB</h1><hr><p>St.Jakob im Rosental ist eine wasserreiches Gemeinde, mit großen Grund- und Quellwasservorkommen, mit insgesamt 193 verzeichneten Fließgewässern. 70 Quellen werden zur Trinkwasserversorgung genützt. Das Rosental ist zudem eine der niederschlagsreichsten Regionen in ganz Europa und eine mit der höchsten Wasserqualität. Wasser ist allgegenwärtig, Bäche und Flüsse sind Lebensadern, Erlebnisräume, Energieräume.</p><p>„Wåsser is Sankt Jakob's Bodenschåtz.“ Guntram Perdacher Bürgermeister.</p><hr>"
        },
        step1: {
          rawValue: "<p> </p><h1>PLANUNG</h1><ul><li>Bei der Planung soll schon darauf geachtet werden, dass die Wasseranschlussgarnitur einen gut zugänglichen und übersichtlichen Platz im Technikraum erhält.</li><li>Die Wasseranschlussgarnitur muss vom jeweiligen Installateur geliefert und montiert werden.</li><li>Die Wassergenossenschaft liefert die Zuleitung bis zur Anschlussgarnitur und baut kurz vor dem Einzug den Wasserzähler ein. Die Grabarbeiten für die Herstellung des Rohrgrabens sind vom Anschlusswerber zu veranlassen und zu bezahlen.</li><li>Vor Baubeginn muss der Anschlusswerber den Anschlussantrag an die Wassergenossenschaft stellen.</li><li>Für die Bauphase wird nach Absprache mit dem Wasserwart ein provisorischer Wasseranschluss erstellt.</li></ul>"
        },
        step2: {
          rawValue: "<p> </p><h1>UNTERLAGEN</h1><ul><li>Anschlussantrag rechtsgültig unterfertigt samt Abbuchungsauftrag</li><li>Baueingabeplan</li><li>Technikraumgrundriss</li></ul><p><b>Es ist in jedem Fall eine Besprechung vor Ort nötig.</b></p>"
        },
        step3: {
          rawValue: "<p> </p><h1>KOSTEN</h1><p><b>Einmalige Gebühren</b>Anschlussgebühr pauschal<b>1.850 €</b>  <b>Laufende Gebühren</b>Wasserbezugsgebühr<b>12 € *</b>Zählergebühr10 €Wassergebühr0,80 € **Mindestwassermenge15 m³  <i>Alles zuzüglich 10% MwSt.</i><br/><i>* pro Jahr / ** pro m³</i> </p>"
        },
        step4: {
          rawValue: "<p> </p><h1>DER WASSERZÄHLER</h1><ul><li>Die Ermittlung des Wasserverbrauches erfolgt durch Wasserzähler, die im Eigentum und unter der Kontrolle der Genossenschaft sind. Diese bestimmt Art, Standort und Größe des Wasserzählers.</li><li>Der Wasserabnehmer haftet für sämtliche Beschädigungen des Wasserzählers, insbesondere auch für Frostschäden. Die Genossenschaft hat das Recht, die Anbringung von Schutzeinrichtungen, zum Beispiel gegen Kälte, auf Kosten des Abnehmers zu verlangen.</li><li>Subzähler können mit Zustimmung der Genossenschaft durch behördlich konzessionierte Installateure auf Kosten der Liegenschaftseigentümer eingebaut werden.</li><li>Sämtliche Hauptwasserzähler müssen über die Genossenschaft bezogen werden.</li><li>Die Wasserzähler werden laufend (alle 5 Jahre) ausgetauscht und neu geeicht. Sollten durch diese Austauscharbeiten Schäden an veralteten und schadensanfälligen Hausanlagen entstehen, sind diese auf Kosten der Liegenschaftseigentümer zu reparieren. Grundsätzlich sind die Liegenschaftseigentümer für eine einwandfreie, gut zugängliche und funktionierende Hauswasseranlage zuständig.</li></ul>"
        },
        step5: {
          rawValue: "<p> </p><h1>ZUSTÄNDIGE STELLE</h1><p>Nachdem Sie einen Antrag gestellt haben und alle erforderlichen Unterlagen vorliegen, kontaktieren Sie uns für einen Termin zur Besprechung vor Ort.</p><p><b>Wassergenossenschaft Mellau</b><br/>Obmann Haller Jürgen<br/>Tempel 72, A – 6881 Mellau</p><p> +43 664 255 866 7<br/> +43 5518 20184<br/>obmann@wg-mellau.at</p>"
        },
        aboutus: {
          rawValue: "<p> </p><h1>ÜBER UNS</h1><p>Die Wassergenossenschaft Mellau ist eine öffentliche, gemeinnützige und auf Gegenseitigkeit beruhende Einrichtung zur Versorgung der Bevölkerung von Mellau, Hinterreuthe und Teilen von Hirschau mit Trink-, Nutz- und Löschwasser. Die Wassergenossenschaft Mellau bezieht ihr Trinkwasser aus neun Quellen im Gebiet der Alpen Wildgunten und Vordersuttis sowie aus einem Grundwasserpumpwerk. Das Grundwasserpumpwerk mit einer Konsensmenge von 20 l/s liegt rechtsufrig der Bregenzerache, kurz vor der Gemeinde Reuthe. Es wird aufgrund der erforderlichen Energie nur in seltenen Fällen betrieben und dient als zweites, sicheres Versorgungsstandbein. Die Quellen liegen in einer Höhe von 1.360 bis 1.480 m. Die minimale Quellschüttung aller Quellen beträgt etwa 6 l/s. Im Mittel schütten die Quellen etwa 20 l/s. Damit auch in Notsituationen und Engpässen eine Wasserversorgung gewährleistet ist, wurde mit den Nachbargemeinden Schnepfau und Reuthe ein Notverbund errichtet.</p>"
        },
        stats1:{
          rawValue: "<p> </p><h1>1.320</h1><p>Ständig versorgte Einwohner</p><h1>470</h1><p>Wasserabnehmer bzw. Mitglieder</p><h1>550 <i>m³</i></h1><p>Mittlerer Wasserbedarf pro Tag</p><h1>100.000 <i>m³</i></h1><p>Mittlerer Wasserbedarf pro Jahr</p><h1>750 <i>m³</i></h1><p>Speicherkapazität aller Hochbehälter</p><h1>220 <i>m³</i></h1><p>Löschwasserreserve</p><h1>15 <i>km</i></h1><p>Versorgungsnetz (ohne Hausanschlussleitungen)</p><h1>285.000 <i>kWh</i></h1><p>Jährlicher Stromertrag aus dem Trinkwasser­kraftwerk: pro Jahr</p>"
        },
        gebirt: {
          rawValue: "<p> </p><h1>QUELLEN &amp; VERSORGUNGSGEBIET</h1><p>Das Mellauer Trinkwasser wird aus den neun Quellen vom Gebiet der Alpen Wildgunten und Vordersuttis sowie aus dem Grundwasservorkommen im Bereich Hinterreuthe gewonnen. Das Wasser aus den Bergquellen weist häufig Anteile an relativ frisch versickertem Oberflächenwasser auf. Daher wird unser Quellwasser schon seit Jahren mit einer sogenannten UV – Desinfektionsanlage aufbereitet. Der Vorteil dieser Methode ist, dass dem Wasser nichts zugesetzt wird und es chemisch, geruchlich und geschmacklich völlig unverändert bleibt. Das Trinkwasser aus unserem Grundwasservorkommen besitzt ohne Aufbereitung eine sehr hohe Qualität und wird direkt an die Bevölkerung abgeben.</p><p>Die Überwachung der Trinkwasserqualität ist über das Lebensmittelsicherheits- und Verbraucherschutzgesetz geregelt. Die Beschaffenheit des Trinkwassers muss strengen Qualitätsvorgaben und Grenzwerten entsprechen. Neben regelmäßigen Kontrollen der Quellen, Brunnen und Aufbereitungsanlagen werden zusätzlich Wasserproben an verschiedenen Stellen im Versorgungsnetz entnommen. Damit ist die Qualitätskontrolle von der Quelle bis zum Wasserhahn durchgängig gesichert. Die jeweils aktuellen Untersuchungsprotokolle können heruntergeladen werden.</p>"
        },
        wossahärte: {
          rawValue: "<p> </p><h1>WASSERHÄRTE</h1><p>Die Wasserhärte des Trinkwassers hängt von den geologischen Bedingungen im Einzugsgebiet ab. Da wir in Mellau unser Trinkwasser aus dem Quellgebiet und aus einem Grundwasservorkommen beziehen, und daher die geologischen Bedingungen sehr unterschiedlich sind, ist auch die Wasserhärte dementsprechend unterschiedlich. Grundsätzlich kann von einem mittelharten Bereich von 8 – 12 Härtegraden ausgegangen werden.</p>"
        },
        wossaverbrauch: {
          rawValue: "<p> </p><h1>WASSERVERBRAUCH</h1><p>In einem durchschnittlichen Haushalt werden nur etwa vier Prozent des gesamten Wasserverbrauchs zum Trinken, Kochen oder für die persönliche Hygiene verwendet. Der große Rest wird für die Haushaltsreinigung und für die Reinigung von Kleidern und Geschirr benötigt.</p>"
        },
        wossaverbrauchstats: {
          rawValue: "<p> </p><h2>Täglicher Wasserbedarf in Liter in einem Haushalt</h2><h1>50 </h1><p>WC-Spülung</p><h1>45 </h1><p>Garten</p><h1>20 </h1><p>Waschmaschine</p><h1>10 </h1><p>Abwasch</p><h1>9 </h1><p>Zähneputzen</p><h1>6 </h1><p>Kochen</p>"
        },
        links:{
          rawValue: "<p> </p><h1>LINKS</h1><p><a href=\"https://www.vorarlberg.at/vorarlberg/wasser_energie/wasser/wasserwirtschaft/start.htm\">Wasserwirtschaft Vorarlberg</a><br/><a href=\"http://www.ovgw.at/\">ovgw.at</a><br/><a href=\"http://trinkwasserinfo.at/\">trinkwasserinfo.at</a></p>"
        },
        team: {
          rawValue: "<p> </p><h2> Obmann</h2><p>Haller Jürgen<br/> +43 664 255 866 7<br/> +43 5518 20184<br/>obmann@wg-mellau.at</p><h2> Wasserwart</h2><p>Felder Peter<br/> +43 664 46 20 129<br/>wasserwart@wg-mellau.at</p><h2> Kassier</h2><p>Gasser Werner<br/> +43 664 465 937 4<br/>kassier@wg-mellau.at</p>"
        },
      }
    }

    // const mapImage = (id:number) => {
    //   const { images } = this.props;
  
    //   return images.filter((img) => parseInt(img.id) === id);
    // };
  

    console.log(loaded)
    console.log(data)

    return (
      <div className="connect">
        <MDBContainer className="p-5">
          <MDBRow className="justify-content-center">
            <MDBCol md="9" className="mb-3 col-connect">
              <p dangerouslySetInnerHTML={{ __html: data.body.step1.rawValue }}></p>
              <p dangerouslySetInnerHTML={{ __html: data.body.step2.rawValue }}></p>
              <p dangerouslySetInnerHTML={{ __html: data.body.step3.rawValue }}></p>
              <p dangerouslySetInnerHTML={{ __html: data.body.step4.rawValue }}></p>
              <p dangerouslySetInnerHTML={{ __html: data.body.step5.rawValue }}></p>
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
