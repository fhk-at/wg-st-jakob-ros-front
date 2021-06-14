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




const MeteringPage: ConnectedPageType = ({slug}) => {
  return (
    <>
      <PageProvider typeName={MeteringPage.PageType} slug={slug}>
        <MDBContainer id="message" className="py-5 my-5">
          <section>
            <RichTextField fieldOptions={{fieldName: "meteringmaincontent1"}}/>
          </section>
          <EmailForm/>
        </MDBContainer>
      </PageProvider>
    </>
  )
}

MeteringPage.PageType = 'MeteringPage'
MeteringPage.ChildPages = []

export default MeteringPage
