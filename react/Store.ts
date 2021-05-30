import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './Reducer';
import thunk from 'redux-thunk';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare let window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer(history),
  composeReduxDevToolsEnhancers(
    applyMiddleware(
      // applyMiddlewareの引数の中にThunkなど盛り込む
      routerMiddleware(history),
      thunk,
    ),
  ),
);
