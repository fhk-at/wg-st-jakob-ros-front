//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer
  } from 'mdb-react-ui-kit';
  
  import {
    ConnectedPageType,
    // CMSProvider,
    PageProvider,
    // TextField,
    RichTextField,
  } from '@snek-shipyard/jaen-cms'
  
  import "./index.scss"
  import {EmailForm} from '@components/molecules'
  import {AdvancedFooter, NavbarHeader} from '@components/organisms'
  
  
  
  
  const MeteringPage: ConnectedPageType = ({slug}) => {
    return (
      <>
        <PageProvider typeName={MeteringPage.PageType} slug={slug}>
          <NavbarHeader/>
          <MDBContainer id="message" className="py-5 my-5">
            <section>
              <RichTextField fieldOptions={{fieldName: "meteringmaincontent1"}}/>
            </section>
            <EmailForm/>
          </MDBContainer>
          <AdvancedFooter
            copyrightText={'CC'}
            copyrightUrl={'mailto:admin@tuwien.club'}
          />
        </PageProvider>
      </>
    )
  }
  
  MeteringPage.PageType = 'MeteringPage'
  MeteringPage.ChildPages = []
  
  export default MeteringPage