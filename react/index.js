import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import App from './App'
import { store, history } from '../react/Store'
import 'Bootstrap'; 
require('bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  <Provider store={store}>
    <div>
    <App history={history}/>
    </div>
  </Provider>,
  document.getElementById('app')
);


