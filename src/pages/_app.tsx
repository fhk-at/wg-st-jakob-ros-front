import {BrowserRouter as Router, Route} from 'react-router-dom'

import {HomePageContainer as HomePage} from '@containers/HomePage'
import {PrivacyPageContainer as PrivacyPage} from '@containers/PrivacyPage'

import {CookieModal} from '@components/molecules'
import {AdvancedFooter, NavbarHeader} from '@components/organisms'

import '@common/css/base.scss'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <NavbarHeader />
      <Router>
        <Route
          exact
          path="/"
          render={props => <HomePage {...props} id={'3'} name={'HomePage'} />}
        />
        <Route
          exact
          path="/privacy"
          render={props => <PrivacyPage {...props} id={'3'} name={'PrivacyPage'} />}
        />
        <CookieModal />
      </Router>
      <AdvancedFooter
        copyrightText={'CC'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </div>
  )
}

export default App
