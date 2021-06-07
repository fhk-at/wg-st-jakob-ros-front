import {BrowserRouter as Router, Route} from 'react-router-dom'

import {HomePageContainer as HomePage} from '@containers/HomePage'

import {Navbar, Footer} from '@components/organisms'

import '@common/css/colors.scss'
import '@common/css/variables.scss'
import '@common/css/layout.scss'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route
          exact
          path="/"
          render={props => <HomePage {...props} id={'3'} name={'HomePage'} />}
        />
      </Router>
      <Footer
        copyrightText={'CC'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </div>
  )
}

export default App
