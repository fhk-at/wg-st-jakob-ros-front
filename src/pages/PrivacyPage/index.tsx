import {useEffect, useState} from 'react'

//import {CMSRichTextField, CMSTextField} from 'jaen-cms/lib/editable'

import "./index.scss"

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBtn,
  MDBIcon,
  MDBContainer
} from 'mdb-react-ui-kit';

import {
  ConnectedPageType,
  // CMSProvider,
  PageProvider,
  // TextField,
  RichTextField,
  IndexField
} from '@snek-shipyard/jaen-cms'


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


const PrivacyPage: ConnectedPageType = ({slug}) => {
  const [cookie] = useStickyState('', 'cookiesettings');
  
  return (
    <>
      <PageProvider typeName={PrivacyPage.PageType} slug={slug}>
        <IndexField
          outerElement={() => <div />}
          renderItem={(item, key, navigate) => (
            <p key={key}>
              Slug: {item.slug} Title: {item.title}{' '}
              <a onClick={() => navigate()}>Goto</a>
            </p>
          )}
        />
        <MDBContainer id="message" className="py-5 my-5">
        <section>
              <RichTextField fieldOptions={{fieldName: "privacymaincontent1"}}/>

            </section>
            <div className="text-left">
              <p className="mb-1">Wir speichern von Ihnen folgende Daten:</p>
              {/* {this.props.auth.uid ? (
                <UserDetails showAll={true} />
              ) : (
                <p className="text-muted">Sie sind nicht angemeldet</p>
              )} */}
              {cookie ? (
                <>
                  <p className="green-text">Sie haben Cookies akzeptiert.</p>
                  <p>
                    <MDBIcon icon="check-circle" className="green-text mr-2" />
                    Essenziell
                  </p>
                  {JSON.parse(cookie).marketing ? (
                    <p>
                      <MDBIcon
                        icon="check-circle"
                        className="green-text mr-2"
                      />
                      Marketing
                    </p>
                  ) : (
                    <p>
                      <MDBIcon icon="times-circle" className="red-text mr-2" />
                      Marketing
                    </p>
                  )}
                  {JSON.parse(cookie).statistics ? (
                    <p>
                      <MDBIcon
                        icon="check-circle"
                        className="green-text mr-2"
                      />
                      Statistiken
                    </p>
                  ) : (
                    <p>
                      <MDBIcon icon="times-circle" className="red-text mr-2" />
                      Statistiken
                    </p>
                  )}
                  <MDBBtn
                    onClick={() => {
                      localStorage.removeItem("cookiesettings");
                      window.location.reload();
                    }}
                    color="danger"
                    size="sm"
                  >
                    Einwilligung zurückziehen
                  </MDBBtn>
                </>
              ) : (
                <p className="red-text">
                  Sie haben die Cookies nicht akzeptiert.
                </p>
              )}
            </div>

            
              
          {/* {this.props.location.pathname === "/agb" && (
            <div className="text-left">
              <p dangerouslySetInnerHTML={{ __html: data.gtc }}></p>
            </div>
          )}
          {this.props.location.pathname === "/shipping" && (
            <div className="text-left">
              <p dangerouslySetInnerHTML={{ __html: data.shipping }}></p>
            </div>
          )}
          {this.props.location.pathname === "/cancellation" && (
            <div className="text-left">
              <p
                dangerouslySetInnerHTML={{ __html: data.cancellationPolicy }}
              ></p>
            </div>
          )} */}
        </MDBContainer>
      </PageProvider>
    </>
  )
}

PrivacyPage.PageType = 'PrivacyPage'
PrivacyPage.ChildPages = []

export default PrivacyPage
