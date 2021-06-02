/* eslint-disable require-jsdoc */
import * as React from 'react';
import { connect } from 'react-redux';
import { AllState, productRootState } from '../../../Reducer';
import {MaterialSubmit} from '../../../db/api'

type Fprops= {
  MaterialSubmit:(
    Product_id:number,
  MaterialName: string,
  MaterialCost: string,
  MaterialUnit: string,
  MaterialVolume: string,
  MaterialNote: string
  )=>void;
text:productRootState;
}
interface Formtext {
  MaterialName: string;
  MaterialCost: string;
  MaterialUnit: string;
  MaterialVolume: string;
  MaterialNote: string;
  FormDisplay: boolean;
}
class MaterialEditForm extends React.Component<Fprops, Formtext> {

  constructor(props: Fprops) {
    super(props);

    this.state = {
      // ※独立したステート
      MaterialName: '',
      MaterialCost: '',
      MaterialUnit: '',
      MaterialVolume: '',
      MaterialNote: '',
      FormDisplay: false,
    };
  }

  render() {
    const FormDisplay = this.props.text.FormDisplay
    const MaterialName = this.state.MaterialName;
    const MaterialCost = this.state.MaterialCost;
    const MaterialUnit = this.state.MaterialUnit;
    const MaterialVolume=this.state.MaterialVolume
    const MaterialNote = this.state.MaterialNote;
    const Product_id= this.props.text.Productid
    if(FormDisplay){
    return (
      <div>

        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.MaterialSubmit(
              this.props.text.Productid,
              MaterialName,
              MaterialCost,
              MaterialUnit,
              MaterialVolume,
              MaterialNote

            );
          }}>
          <h4>材料情報</h4>

          <label>材料名</label>
          <input
            type="text"
            value={this.state.MaterialName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ MaterialName: e.currentTarget.value });
            }}
          />

          <label>単価</label>
          <input
            type="text"
            value={this.state.MaterialCost}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ MaterialCost: e.currentTarget.value });
            }}
          />
          <label>単位</label>
          <input
            type="text"
            value={this.state.MaterialUnit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ MaterialUnit: e.currentTarget.value });
            }}
          />
          <label>数量</label>
          <input
            type="text"
            value={this.state.MaterialVolume}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ MaterialVolume: e.currentTarget.value });
            }}
          />
          <label>備考</label>
          <input
            type="text"
            value={this.state.MaterialNote}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ MaterialNote: e.currentTarget.value });
            }}
          />
          <button type="submit">送信</button>
        </form>
      </div>
    );
    }else{
      return(
<div>
  <span>先に商品を入力しください</span>
</div>
    )}
  }
}

const mapStateToProps = (state: AllState) => ({
text:state.productReducer
});

export default connect(mapStateToProps, { MaterialSubmit })(MaterialEditForm);
