/* eslint-disable require-jsdoc */
import * as React from 'react';
import { AllState,} from '../Reducer';
import { connect } from 'react-redux';
import { store } from '../Store';
import { Reset,} from '../db/api';
import { Button } from 'reactstrap';
import * as H from 'history'
import  '../styles/style.scss';
import { push } from 'connected-react-router';

interface props {
  Reset:()=>void;
  history:H.History
}



export class Top extends React.Component<props> {
     handleLink=()=>{
      this.props.history.push("/products")
    }
  render() {  
  
// history.push("/products")

    return (
      <div className="top" >
        <header>
        <h1 className="h1">Mainmenu</h1>
        </header>
        
        
      <body className='background' >
        <Button onClick={()=>this.props.Reset()} color="success" className="Button">新規登録</Button><br></br>
        <Button onClick={()=>{this.handleLink()}} color="success">商品一覧</Button>
      </body>
      <footer>

      </footer>
    
      </div>
    );
  }
}
console.log(store.getState());
const mapStateToProps = (state: AllState) => ({

});


export default connect(mapStateToProps, { Reset })(Top);


