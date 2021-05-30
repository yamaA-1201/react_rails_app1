import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import App from './App'
import { store, history } from '../react/Store'


ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('app')
);


