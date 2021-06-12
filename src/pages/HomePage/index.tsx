import "./index.scss"

//> Components
// Sections
import {
  HeroSection,
  IntroSection,
  AboutSection,
  HistorySection,
  PurificationSection,
  ConnectSection,
  // NewsSection,
  MapSection,
} from "@components/organisms";

import {
  ConnectedPageType,
  // CMSProvider,
  PageProvider,
  TextField,
  // IndexField
} from '@snek-shipyard/jaen-cms'

import PrivacyPage from "../PrivacyPage";

const HomePage: ConnectedPageType = ({slug}) => {

  return (
    <>
      <PageProvider typeName={HomePage.PageType} slug={slug}>
        <HeroSection xlheading1 = {<TextField fieldOptions={{name: "heroxlheading1" }}/>}
                     xlheading2 = {<TextField fieldOptions={{name: "heroxlheading2" }}/>}
                     xlheading3 = {<TextField fieldOptions={{name: "heroxlheading3" }}/>}
        />
        <IntroSection sectionData={{lol: ""}}/>
        <ConnectSection sectionData={{lol: ""}}/>
        <PurificationSection sectionData={{lol: ""}}/>
        <AboutSection sectionData={{lol: ""}}/>
        {/* <NewsSection sectionData={{lol: ""}}/> */}
        <HistorySection sectionData={{lol: ""}}/>
      </PageProvider>

      <MapSection />

      {/* <div className="test-con container pt-5 mx-0">
        
        <h1 className="cms-center mt-5">
          <CMSTextField
            content={pageContent?.body[0].value}
            editableOptions={{
              pageId: id,
              pageName: name,
              fieldName: 'body',
              block: {
                id: 1,
                position: 0,
                type: 'heading'
              }
            }}
          />
        </h1>
        <div className="cms-center mt-5">
          <CMSRichTextField
            content={pageContent?.body[1].value}
            editableOptions={{
              pageId: id,
              pageName: name,
              fieldName: 'body',
              block: {
                id: 1,
                position: 1,
                type: 'subheading'
              }
            }}
          />
        </div>
      </div> */}
    </>
  )
}

HomePage.PageType = 'HomePage'
HomePage.ChildPages = [PrivacyPage]

export default HomePage
