import { App } from 'electron';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import Top from './components/Top';
import New from './components/product/new';
import Products from './components/product/Products';
import Show from './components/product/Show';
import Edit from './components/product/edit/Edit'
import PrintView from './components/product/PrintView'
type AppProps = {
  history: History;
};

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/top" component={Top} />
          <Route path="/new" component={New} />
          <Route path="/edit" component={Edit} />
          <Route path="/show" component={Show} />
          <Route path="/view" component={PrintView} />
          <Route path="/products" component={Products}/>
          <Route component={Top} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
};

export default App;
