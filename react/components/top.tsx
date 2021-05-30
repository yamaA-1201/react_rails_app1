/* eslint-disable require-jsdoc */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AsyncAll } from '../actions/ActionCreator';
import { AllState,} from '../Reducer';
import { connect } from 'react-redux';
import { store } from '../Store';

import { ProductAll, test } from '../db/api';

interface props {
}

export class Top extends React.Component<props> {

  render() {
    return (
      <div>
        <h1>Mainmenu</h1>
        <Link to="/new">新規登録</Link>
        <button onClick={test}>通信チェック</button>
        <Link to="/products">商品一覧</Link>
        <a>一覧</a>
      </div>
    );
  }
}
console.log(store.getState());
const mapStateToProps = (state: AllState) => ({

});

export default connect(mapStateToProps, { AsyncAll })(Top);
