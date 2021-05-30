/* eslint-disable require-jsdoc */
import * as React from 'react';
import { connect } from 'react-redux';
import { ProductAction } from '../../actions/ActionCreator';
import {ProductSubmit} from '../../db/api'
import { AllState } from '../../Reducer';
interface Fprops {
  ProductSubmit: any;
  
}
interface Formtext {
  ProductName: string;
  ProductPrice: string;
  ProductCost: string;
  Category: string;
  
}
class ProductForm extends React.Component<Fprops, Formtext> {

  constructor(props: Fprops) {
    super(props);

    this.state = {
      // ※独立したステート
      ProductName: '',
      ProductPrice: '',
      ProductCost: '',
      Category: '',
    };
  }

  render() {
    const ProductName = this.state.ProductName;
    const ProductPrice = this.state.ProductPrice;
    const ProductCost = this.state.ProductCost;
    const Category = this.state.Category;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.ProductSubmit(
              ProductName,
              ProductPrice,
              ProductCost,
              Category,
            );
            console.log(this.state.ProductName);
          }}>
          <h4>商品情報</h4>

          <label>
            <strong>商品名</strong>
          </label>
          <input
            type="text"
            value={this.state.ProductName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ ProductName: e.currentTarget.value });
            }}
          />
          <label>
            <strong>売価</strong>
          </label>
          <input
            type="text"
            value={this.state.ProductPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ ProductPrice: e.currentTarget.value });
            }}
          />
          <label>
            <strong>原材料費</strong>
          </label>
          <input
            type="text"
            value={this.state.ProductCost}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ ProductCost: e.currentTarget.value });
            }}
          />
          <label>
            <strong>カテゴリー</strong>
          </label>
          <input
            type="text"
            value={this.state.Category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ Category: e.currentTarget.value });
            }}
          />
          <input type="submit" value="送信" />
        </form>
      </div>
    );
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapStateToProps = (state: AllState) => ({});

export default connect(mapStateToProps, { ProductSubmit })(ProductForm);
