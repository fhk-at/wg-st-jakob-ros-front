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
  //NewsSection,
  EmergencySection,
  MapSection,
} from "@components/organisms";

import {TimelineBlock} from '@components/molecules'

import {
  ConnectedPageType,
  // CMSProvider,
  PageProvider,
  EditableField as TextField,
  StreamField,
  RichTextField,
  //IndexField
} from '@snek-shipyard/jaen-cms'
import {AdvancedFooter, NavbarHeader} from '@components/organisms'

import PrivacyPage from "../PrivacyPage";
import NewsPage from "../NewsPage";
import MeteringPage from "../MeteringPage";
import ContactPage from "../ContactPage";

const HomePage: ConnectedPageType = ({slug}) => {

  return (
    <>
      <PageProvider typeName={HomePage.PageType} slug={slug}>
        <NavbarHeader/>
        <HeroSection xlheading1 = {<TextField fieldOptions={{fieldName: "heroxlheading1" }}/>}
                     xlheading2 = {<TextField fieldOptions={{fieldName: "heroxlheading2" }}/>}
                     xlheading3 = {<TextField fieldOptions={{fieldName: "heroxlheading3" }}/>}
                     xlsubheading1 = {<TextField fieldOptions={{fieldName: "heroxlsubheading1" }}/>}
                     xlsubheading2 = {<TextField fieldOptions={{fieldName: "heroxlsubheading2" }}/>}
                     lgheading1 = {<TextField fieldOptions={{fieldName: "herolgheading1" }}/>}
                     button1 = {<TextField fieldOptions={{fieldName: "herobutton1" }}/>}
        />
        <IntroSection maincontent1 = {<RichTextField fieldOptions={{fieldName: "intromaincontent1" }}/>}
                      columnheading1 = {<TextField fieldOptions={{fieldName: "introcolumnheading1" }}/>}
                      columnheading2 = {<TextField fieldOptions={{fieldName: "introcolumnheading2" }}/>}
                      columnheading3 = {<TextField fieldOptions={{fieldName: "introcolumnheading3" }}/>}
                      columncontent1 = {<TextField fieldOptions={{fieldName: "introcolumncontent1" }}/>}
                      columncontent2 = {<TextField fieldOptions={{fieldName: "introcolumncontent2" }}/>}
                      columncontent3 = {<TextField fieldOptions={{fieldName: "introcolumncontent3" }}/>}
                      button1 = {<TextField fieldOptions={{fieldName: "introbutton1" }}/>}
        />
        <ConnectSection maincontent1 = {<RichTextField fieldOptions={{fieldName: "connectmaincontent1" }}/>}
                        maincontent2 = {<RichTextField fieldOptions={{fieldName: "connectmaincontent2" }}/>}
                        button1 = {<RichTextField fieldOptions={{fieldName: "connectbutton1" }}/>}
                        contacttable1 = {Array.apply([], Array(1)).map((row, index1) => {
                        row = Array.apply(null, Array(2)).map((_, index2) => 
                          <RichTextField fieldOptions={{fieldName: index1.toString() + "contactcell" + index2.toString()}}/>
                        );
                        return row as JSX.Element[]
                      })}
        />
        <EmergencySection maincontent1 = {<RichTextField fieldOptions={{fieldName: "emergencymaincontent1" }}/>}
                        contacttable1 = {Array.apply([], Array(1)).map((row, index1) => {
                        row = Array.apply(null, Array(2)).map((_, index2) => 
                          <RichTextField fieldOptions={{fieldName: index1.toString() + "contactcell" + index2.toString()}}/>
                        );
                        return row as JSX.Element[]
                      })}
        />
        {/* <PurificationSection sectionData={{lol: ""}}/> */}
        {/* <NewsSection maincontent1 = {<RichTextField fieldOptions={{fieldName: "newsmaincontent1" }}/>}
                     newsindex1 = {<IndexField
                     fixedSlug = "neuigkeiten"
                     outerElement={() => <div />}
                     renderItem={(item, key, navigate) => (
                       <p key={key}>
                         Slug: {item.slug} Title: {item.title}{' '}
                         <a onClick={() => navigate()}>Goto</a>
                       </p>
                     )}/>}

        /> */}
        <AboutSection maincontent1 = {<RichTextField fieldOptions={{fieldName: "aboutmaincontent1" }}/>}
                      maincontent2 = {<RichTextField fieldOptions={{fieldName: "aboutmaincontent2" }}/>}
                      statisticstable1={Array.apply([], Array(2)).map((row, index1) => {
                        row = Array.apply(null, Array(4)).map((_, index2) => 
                          <RichTextField fieldOptions={{fieldName: index1.toString() + "statisticscell" + index2.toString()}}/>
                        );
                        return row as JSX.Element[]
                      })}
                      contacttable1={Array.apply([], Array(1)).map((row, index1) => {
                        row = Array.apply(null, Array(2)).map((_, index2) => 
                          <RichTextField fieldOptions={{fieldName: index1.toString() + "contactcell" + index2.toString()}}/>
                        );
                        return row as JSX.Element[]
                      })}
        />

        <HistorySection committeetable1={Array.apply([], Array(20)).map((row, index1) => {
                          row = Array.apply(null, Array(3)).map((_, index2) => 
                            <RichTextField fieldOptions={{fieldName: index1.toString() + "committeecell" + index2.toString()}}/>
                          );
                          return row as JSX.Element[]
                        })}

                        timeline1 = {<StreamField
                          reverseOrder={false}
                          name={'timeline'}
                          blocks={[TimelineBlock]}
                        />}
        />
        <MapSection />
        <AdvancedFooter
          copyrightText={'CC'}
          copyrightUrl={'mailto:admin@tuwien.club'}
        />
      </PageProvider>
    </>
  )
}

HomePage.PageType = 'HomePage'
HomePage.ChildPages = [MeteringPage, NewsPage, ContactPage, PrivacyPage]

export default HomePage
