import {useEffect} from 'react'

import {CMSRichTextField, CMSTextField} from 'jaen-cms/lib/editable'

import {RootState} from '@store/store'

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
  NewsSection,
  MapSection,
} from "@components/organisms";

interface Props {
  loadPage: (id: string) => void
  id: string
  name: string
  pages: RootState['cms']['pages']
}

const HomePage = ({pages, id, name, loadPage}: Props): JSX.Element => {
  useEffect(() => {
    loadPage(id)
  }, [])
  const CMSPageId = `${id}_${name}`
  const pageContent = pages[CMSPageId]?.serverContent

  return (
    <>
      <HeroSection sectionData={{lol: ""}}/>
      <IntroSection sectionData={{lol: ""}}/>
      <ConnectSection sectionData={{lol: ""}}/>
      <PurificationSection sectionData={{lol: ""}}/>
      <AboutSection sectionData={{lol: ""}}/>
      <NewsSection sectionData={{lol: ""}}/>
      <HistorySection sectionData={{lol: ""}}/>
      <MapSection sectionData={{lol: ""}}/>

      <div className="test-con container pt-5 mx-0">
        
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
      </div>
    </>
  )
}

export default HomePage
