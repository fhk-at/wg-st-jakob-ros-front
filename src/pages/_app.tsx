import {CMSProvider} from '@snek-shipyard/jaen-cms'

import HomePage from './HomePage'
import NewsPage from './NewsPage'
import PrivacyPage from './PrivacyPage'

import {CookieModal} from '@components/molecules'
import {AdvancedFooter, NavbarHeader} from '@components/organisms'

import '@common/css/base.scss'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      
      <CMSProvider settings={{gitRemote: "fhk-at/wg-st-jakob-ros-front"}} pages={[HomePage, NewsPage, PrivacyPage]}>
        <NavbarHeader />
        <CookieModal />
        <AdvancedFooter
          copyrightText={'CC'}
          copyrightUrl={'mailto:admin@tuwien.club'}
        />
      </CMSProvider>

    </div>
  )
}

export default App
