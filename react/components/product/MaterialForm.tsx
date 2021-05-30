/* eslint-disable require-jsdoc */
import * as React from 'react';
import { connect } from 'react-redux';
import { MaterialAction } from '../../actions/ActionCreator';
import { AllState, productRootState } from '../../Reducer';
type Fprops= {
  MaterialAction: any;
text:productRootState;
}
interface Formtext {
  MaterialName: string;
  MaterialPrice: string;
  MaterialUnit: string;
  MaterialVolume: string;
  MaterialNote: string;
  FormDisplay: boolean;
}
class MaterialForm extends React.Component<Fprops, Formtext> {

  constructor(props: Fprops) {
    super(props);

    this.state = {
      // ※独立したステート
      MaterialName: '',
      MaterialPrice: '',
      MaterialUnit: '',
      MaterialVolume: '',
      MaterialNote: '',
      FormDisplay: false,
    };
  }

  render() {
    const FormDisplay = this.props.text.FormDisplay
    const MaterialName = this.state.MaterialName;
    const MaterialPrice = this.state.MaterialPrice;
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
            this.props.MaterialAction(
              Product_id,
              MaterialName,
              MaterialPrice,
              MaterialUnit,
              MaterialVolume,
              MaterialNote

            );
          }}>
          <h4>材料情報</h4>
          {console.log(this.props.text.Productid)}

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
            value={this.state.MaterialPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ MaterialPrice: e.currentTarget.value });
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
  {console.log(this.props.text.Productid)}
  <span>先に商品を入力しください</span>
</div>
    )}
  }
}

const mapStateToProps = (state: AllState) => ({
text:state.productReducer
});

export default connect(mapStateToProps, { MaterialAction })(MaterialForm);
