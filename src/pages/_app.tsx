import {CMSProvider} from '@snek-shipyard/jaen-cms'

import HomePage from './HomePage'
import NewsPage from './NewsPage'
import PrivacyPage from './PrivacyPage'
import MeteringPage from './MeteringPage'
import ContactPage from './ContactPage'

import {CookieModal} from '@components/molecules'


import '@common/css/base.scss'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <CMSProvider settings={{gitRemote: "fhk-at/wg-st-jakob-ros-front"}} pages={[HomePage, MeteringPage, NewsPage, ContactPage, PrivacyPage]}>
        <CookieModal />
      </CMSProvider>
    </div>
  )
}

export default App
