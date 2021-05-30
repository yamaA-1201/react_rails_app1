/* eslint-disable require-jsdoc */
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { productRootState, TextType } from '../../Reducer';
import { ProductAction,MaterialAction } from '../../actions/ActionCreator';
import { AllState } from '../../Reducer';
import { store } from '../../Store';
import ProductForm from './ProductForm';
import MaterialForm from './MaterialForm';
interface Fprops {
  text: productRootState;
  text_list:TextType;

  ProductAction: any;
  MaterialAction: any;


}
interface Formtext {
  FormDisplay: boolean;
}
class New extends React.Component<Fprops,Formtext> {
  constructor(props: Fprops) {
    super(props);

    this.state = {
      FormDisplay: false,
    };
  }

  FormChange = () => {
    this.setState({ FormDisplay: !this.state.FormDisplay });
  };
  render() {
    const ToggleForm = this.state.FormDisplay;
    return (
      <div>
        {console.log(store.getState())}
        <div>
          <header>
          <Link to="/Top">戻る</Link>
          <h1>新規登録</h1>
          </header>
          <h2>商品名</h2>
          <h2>{this.props.text.ProductName}</h2>
          <br/>
          <h3>商品データ</h3>
          <br/>
          <table>
            <tr>
          <td>価格:{this.props.text.ProductPrice}</td>
          </tr>
          <tr>
          <td>原価:{this.props.text.ProductCost}</td>
          </tr>
          <tr>
          <td>カテゴリー:{this.props.text.Category}</td>
          </tr>
          </table>
    
          <br />
          <ul>
          {this.props.text_list.map((t) =>{
            return(
              <div key={t.id}>
                <a>資材名:{t.MaterialName}</a>
                <a>単価:{t.MaterialPrice}</a>
                <a>資材単位:{t.MaterialUnit}</a>
                <a>数量:{t.MaterialVolume}</a>
                <a>備考:{t.MaterialNote}</a>
              </div>
            )
          })}
          </ul>
          <hr></hr>
        </div>
        
        {ToggleForm ? (
          <button onClick={this.FormChange}>商品情報</button>
        ) : (
          <button onClick={this.FormChange}>材料情報</button>
        )}

        {ToggleForm ? <MaterialForm /> : <ProductForm />}
      </div>
    );
  }
}

const mapStateToProps = (state: AllState) => ({
  text: state.productReducer,
  text_list: state.materialReducer
});

export default connect(mapStateToProps, { ProductAction,MaterialAction })(New);
