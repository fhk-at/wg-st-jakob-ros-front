import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit'

// import React from 'react'

import './index.scss'

interface Props {
  copyrightText: string
  copyrightUrl: string
}

const Footer = ({ copyrightText, copyrightUrl }: Props) => {
  return (
    <MDBFooter color="white" className="font-small text-dark pt-4">
      <div className="footer-copyright text-center py-3 text-dark">
        <MDBContainer fluid>
          <div>
          <div className="footer-copyright text-center py-2">
        
        <a className="text-white" href={copyrightUrl}>
          {copyrightText}
        </a>
      </div>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <p className="my-2 font-weight-bold">
              Made with
              <i
                className="fas fa-heart pulse blue-text ml-1 mr-1"
                aria-hidden="true"
              ></i>
              by
              <a className="text-white" href={copyrightUrl}>
              {copyrightText}
            </a>
            </p>
          </div>
          <div>
            <small>
              Stable release
              <span className="pl-2 pr-2">·</span>
              Version v{process.env.REACT_APP_VERSION}
              <span className="pl-2 pr-2">·</span>
              <a
                href="https://github.com/blue-lupi/kaffeerudel"
                rel="noopener noreferrer"
                target="_blank"
                className="text-dark"
              >
                <MDBIcon fab icon="github" className="pr-2" />
                View on GitHub
              </a>
              <span className="pl-2 pr-2">·</span>
              <a
                href="https://github.com/blue-lupi/kaffeerudel/issues/new?template=bug_report.md"
                rel="noopener noreferrer"
                target="_blank"
                className="text-dark"
              >
                <MDBIcon icon="bug" className="pr-2" />
                Report bug
              </a>
            </small>
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
