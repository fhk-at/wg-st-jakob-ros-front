//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  // ComponentContainer,
  ComponentContainerTree,
  Description,
  DescriptionContent,
  DescriptionHeader,
  // Horizontal,
  Vertical
} from "./index.styles";


import { Chrono } from "react-chrono";
//> CSS
import "./index.scss";

interface Props {
  type: string
  cardHeight?: number
  streamfield: React.ReactNode
}

const Timeline = ({type, streamfield}: Props): JSX.Element => {
  const test = streamfield as JSX.Element[]
  console.log(test[0])

  return (
    <Vertical>
      <Description>
        <span>
          <DescriptionHeader># Slideshow with Tree</DescriptionHeader>
        </span>
        <DescriptionContent>
          SlideShow is supported in all 3 modes.
        </DescriptionContent>
      </Description>
      <ComponentContainerTree type={type}>
        <Chrono
          mode="VERTICAL"
          hideControls
          scrollable
        >
          {streamfield as JSX.Element}
        </Chrono>
      </ComponentContainerTree>
    </Vertical>
  )
}
  
  export default Timeline

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
