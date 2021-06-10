import { useEffect, useState } from 'react';

// Router DOM bindings
import { Link } from "react-router-dom";

//> Lottie
import Lottie from "lottie-react-web";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBInputGroup,
} from 'mdb-react-ui-kit';

//#regin > Common
import animationData from "@common/lottie/cookie.json";
//#endregion

//#region > Config
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
//#endregion

function useStickyState(defaultValue:any, key:any) {
  const [cookie, setCookie] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(cookie));
  }, [key, cookie]);
  return [cookie, setCookie];
}

const CookieModal = () => {
  const [cookie, setCookie] = useStickyState('', 'cookiesettings');

  const [cookieModal, setCookieModal] = useState(cookie ? false : true);
  const [essentialCookie] = useState(true);
  const [statisticsCookie, setStatisticsCookie] = useState(false);
  const [marketingCookie, setMarketingCookie] = useState(false);
 
  console.log("Have our privacy cookies been set?", cookieModal)
  const toggleShow = () => setCookieModal(!cookieModal);

  const checkAll = () => {
    setStatisticsCookie(true)
    setMarketingCookie(true)
    saveCookies()
  }
  const saveCookies = () => {
    setCookie(JSON.stringify({
      essential: essentialCookie ? true : false,
      statistics: statisticsCookie ? true : false,
      marketing: marketingCookie ? true : false,
    }))
    toggleShow()
  }

  return (
    <>
      <MDBModal staticBackdrop tabIndex='-1' show={cookieModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cookie Einstellungen</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="d-block m-auto" style={{ width: "8rem" }}>
                <Lottie options={defaultOptions} speed={1} ariaRole="img" />
              </div>
              <p className="text-muted">
                  Wir verwenden auf unserer Website Cookies, um die Benutzererfahrung
                  zu verbessern. Einige davon sind essenziell für den Betrieb der
                  Website.{" "}
                  <Link to="/privacy" target="_blank">
                  Details anzeigen
                  </Link>
              </p>
              <div className="my-4">
                  <div className="custom-control custom-checkbox">
                  <input
                      type="checkbox"
                      className="custom-control-input"
                      id="essentialCookie"
                      checked={essentialCookie}
                      disabled
                  />
                  <label className="custom-control-label" htmlFor="essentialCookie">
                      Essenziell
                  </label>
                  </div>
                  <MDBInputGroup className="d-flex justify-content-center mt-2">
                  <div className="custom-control custom-checkbox mr-3">
                      <input
                      type="checkbox"
                      className="custom-control-input"
                      id="MarketingCookie"
                      checked={marketingCookie}
                      name="marketing"
                      onChange={(e) => setMarketingCookie(e.target.checked)}
                      />
                      <label
                      className="custom-control-label"
                      htmlFor="MarketingCookie"
                      >
                      Marketing
                      </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                      <input
                      type="checkbox"
                      className="custom-control-input"
                      id="statisticsCookie"
                      name="statistics"
                      checked={statisticsCookie}
                      onChange={(e) => setStatisticsCookie(e.target.checked)}
                      />
                      <label
                      className="custom-control-label"
                      htmlFor="statisticsCookie"
                      >
                      Statistiken
                      </label>
                  </div>
                  </MDBInputGroup>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="success" onClick={() => checkAll()}>
                <MDBIcon icon="check-circle" />
                Alle akzeptieren
              </MDBBtn>
              <MDBBtn color="white" size="sm" onClick={() => saveCookies()}>
              Auswahl speichern
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default CookieModal