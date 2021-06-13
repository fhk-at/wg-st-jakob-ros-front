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





const NewsPage: ConnectedPageType = ({slug}) => {
  return (
    <>
      <PageProvider typeName={NewsPage.PageType} slug={slug}>
        <MDBContainer id="message" className="py-5 my-5">
          <section>
            <RichTextField fieldOptions={{name: "newsmaincontent1"}}/>
          </section>
        </MDBContainer>
      </PageProvider>
    </>
  )
}

NewsPage.PageType = 'NewsPage'
NewsPage.ChildPages = []

export default NewsPage
