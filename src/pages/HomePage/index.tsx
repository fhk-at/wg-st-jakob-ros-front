import "./index.scss"

//> Components
// Sections
import {
  HeroSection,
  IntroSection,
  AboutSection,
  HistorySection,
  //PurificationSection,
  ConnectSection,
  NewsSection,
  MapSection,
} from "@components/organisms";

import {
  ConnectedPageType,
  // CMSProvider,
  PageProvider,
  TextField,
  RichTextField,
  IndexField
} from '@snek-shipyard/jaen-cms'

import PrivacyPage from "../PrivacyPage";
import NewsPage from "../NewsPage";

const HomePage: ConnectedPageType = ({slug}) => {

  return (
    <>
      <PageProvider typeName={HomePage.PageType} slug={slug}>
        <HeroSection xlheading1 = {<TextField fieldOptions={{name: "heroxlheading1" }}/>}
                     xlheading2 = {<TextField fieldOptions={{name: "heroxlheading2" }}/>}
                     xlheading3 = {<TextField fieldOptions={{name: "heroxlheading3" }}/>}
                     xlsubheading1 = {<TextField fieldOptions={{name: "heroxlsubheading1" }}/>}
                     xlsubheading2 = {<TextField fieldOptions={{name: "heroxlsubheading2" }}/>}
                     lgheading1 = {<TextField fieldOptions={{name: "herolgheading1" }}/>}
                     button1 = {<TextField fieldOptions={{name: "herobutton1" }}/>}
        />
        <IntroSection maincontent1 = {<RichTextField fieldOptions={{name: "intromaincontent1" }}/>}
                      columnheading1 = {<TextField fieldOptions={{name: "introcolumnheading1" }}/>}
                      columnheading2 = {<TextField fieldOptions={{name: "introcolumnheading2" }}/>}
                      columnheading3 = {<TextField fieldOptions={{name: "introcolumnheading3" }}/>}
                      columncontent1 = {<TextField fieldOptions={{name: "introcolumncontent1" }}/>}
                      columncontent2 = {<TextField fieldOptions={{name: "introcolumncontent2" }}/>}
                      columncontent3 = {<TextField fieldOptions={{name: "introcolumncontent3" }}/>}
                      button1 = {<TextField fieldOptions={{name: "introbutton1" }}/>}
        />
        <ConnectSection maincontent1 = {<RichTextField fieldOptions={{name: "connectmaincontent1" }}/>}
                        maincontent2 = {<RichTextField fieldOptions={{name: "connectmaincontent2" }}/>}
        />
        {/* <PurificationSection sectionData={{lol: ""}}/> */}
        <NewsSection maincontent1 = {<RichTextField fieldOptions={{name: "newsmaincontent1" }}/>}
                     newsindex1 = {<IndexField
                     outerElement={() => <div />}
                     renderItem={(item, key, navigate) => (
                       <p key={key}>
                         Slug: {item.slug} Title: {item.title}{' '}
                         <a onClick={() => navigate()}>Goto</a>
                       </p>
                     )}/>}

        />
        <AboutSection maincontent1 = {<RichTextField fieldOptions={{name: "aboutmaincontent1" }}/>}/>
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
HomePage.ChildPages = [NewsPage, PrivacyPage]

export default HomePage
