import './assets/scss/app.scss';

import {render} from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/config'
import App from './components/App';
render(
  <div>
    <h1>hola mundo</h1>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)
