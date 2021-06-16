//> Additional modules
//> Additional modules
// Parallax
// import { Parallax } from "react-scroll-parallax";

// Parallax
// Scroll
// import { Link } from "react-scroll";
import {BC, EditableField} from '@snek-shipyard/jaen-cms'
import {prepareBlocks} from '@snek-shipyard/jaen-cms/lib/components/blocks'

//> CSS
import "./index.scss";

//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";

// Placeholder image
// import {ReactComponent as WgLogo} from "../../../../common/logo.svg";



type TimelineBlockType = {title: string; cardtitle: string; cardsubtitle: string, cardcontentdetails: string}

const TimelineBlock: BC<TimelineBlockType> = ({
  fieldOptions,
  streamFieldWidth,
}) => {
  const blocks = prepareBlocks<TimelineBlockType>(TimelineBlock, fieldOptions)

  return (
    <>
      <div style={{ maxWidth: streamFieldWidth }} className="right vertical-item-row visible VerticalItemWrapper eecm4uk4" data-testid="vertical-item-row" role="listitem">
        <div className="right TimelineTitleWrapper eecm4uk0">
            <div className="timeline-item-title TitleWrapper ergoa4r0">{blocks['title']}</div>
        </div>
        <div className="card-content-wrapper visible right TimelineCardContentWrapper eecm4uk2">
            <section className="timeline-card-content TimelineItemContentWrapper emk90bu9">
              <header className="TimelineCardHeader emk90bu8">
                  <p className="card-title TimelineCardTitle emk90bu6">{blocks['cardtitle']}</p>
                  <p className="card-sub-title TimelineContentSubTitle emk90bu7">{blocks['cardsubtitle']}</p>
              </header>
              <div aria-expanded="false" className="show-less card-description TimelineContentDetailsWrapper emk90bu3">
                  <p className="TimelineContentDetails emk90bu5">
                    {blocks['cardcontentdetails']}
                  </p>
              </div>
              <span className="show-more ShowMore emk90bu2" role="button">
                  <span>read more</span>
                  <span className="ChevronIconWrapper emk90bu0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
              </span>
            </section>
        </div>
        <div className="right VerticalCircleWrapper eecm4uk3" data-testid="tree-leaf" role="button">
            <div className="right timeline-vertical-circle VerticalCircleContainer eecm4uk1" role="button" data-testid="tree-leaf-click" aria-label="select timeline">
              <div className="Circle e5foh872"></div>
            </div>
        </div>
      </div>
    </>
  )
}

TimelineBlock.BlockType = 'TimelineBlock'
TimelineBlock.BlockFields = {
  title: EditableField,
  cardtitle: EditableField,
  cardsubtitle: EditableField,
  cardcontentdetails: EditableField
}

  
export default TimelineBlock

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
