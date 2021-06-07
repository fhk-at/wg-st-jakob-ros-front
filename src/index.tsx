import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store, PersistGate, persistor} from '@store/store'
import { ParallaxProvider } from 'react-scroll-parallax';
import {CMSWrapper} from 'jaen-cms/lib/index'
import App from './pages/_app'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <CMSWrapper bifrostUrls={{httpUrl: 'https://ccms.snek.at/graphql'}}>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </CMSWrapper>
      </PersistGate>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
)