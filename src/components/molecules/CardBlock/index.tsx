//> Additional modules
//> Additional modules
// Parallax
// import { Parallax } from "react-scroll-parallax";

// Parallax
// Scroll
// import { Link } from "react-scroll";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
  // MDBBtn,
  // MDBIcon,
} from 'mdb-react-ui-kit';



import {BC, EditableField, RichTextField} from '@snek-shipyard/jaen-cms'
import {prepareBlocks} from '@snek-shipyard/jaen-cms/lib/components/blocks'

//> CSS
import "./index.scss";

//> Images
// Coffee center image
//import localImage from "../../../../common/img/content/bg/bg1.jpg";

// Placeholder image
// import {ReactComponent as WgLogo} from "../../../../common/logo.svg";



type CardBlockType = {title: string; extra: string; text: string}

const CardBlock: BC<CardBlockType> = ({
  fieldOptions,
  streamFieldWidth
}) => {
  const blocks = prepareBlocks<CardBlockType>(CardBlock, fieldOptions)

  return (
    <>
      <MDBCard style={{ maxWidth: streamFieldWidth }}>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{blocks['title']}</MDBCardTitle>
          <MDBCardText>
            {blocks['extra']}
          </MDBCardText>
          <MDBBtn href='#'>{blocks['text']}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

CardBlock.BlockType = 'CardBlock'
CardBlock.BlockFields = {
  title: EditableField,
  extra: EditableField,
  text: RichTextField
}

  
export default CardBlock

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
