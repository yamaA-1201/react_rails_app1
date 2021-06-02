import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { productRootState, TextType } from '../../../Reducer';
import { ProductAction,MaterialAction } from '../../../actions/ActionCreator';
import { AllState } from '../../../Reducer';
import { store } from '../../../Store';
import ProductEditForm from './ProductEditForm';
import MaterialEditForm from './MaterialEditForm';
import { MaterialDelete} from '../../../db/api';
import axios from 'axios';
interface Fprops {
  text: productRootState;
  text_list:TextType[];
  //ProductAction: any;
  MaterialAction: (
    product_id:number,
    name:string,
    cost:string,
    unit:string,
    volume:string,
    note:string)
    =>void;

    MaterialDelete:(
      Productid:number,
      MaterialName:string,
      MaterialCost:string,
      MaterialVolume:string,
      id:number,
   )=>void;

}
interface Formtext {
  FormDisplay: boolean;
  Display:boolean;
}
class Edit extends React.Component<Fprops,Formtext> {
  constructor(props: Fprops) {
    super(props);

    this.state = {
      FormDisplay: false,
      Display:false,
    };
  }
  componentDidMount(){
    const id= this.props.text.Productid
   axios.get(`http://localhost:3000/api/v1/materials/show/?product_id=${id}`)
   .then(response => {for (var i=0; i < response.data.length; ++ i){
    console.log(response.data[i].product_id,response.data[i].name,response.data[i].cost,response.data[i].unit,response.data[i].volume,response.data[i].note)
     this.props.MaterialAction(
       response.data[i].product_id,
       response.data[i].name,
       response.data[i].cost,
       response.data[i].unit,
       response.data[i].volume,
       response.data[i].note)
       
    }
 this.setState({Display:true})
   })
   .catch(err => {
     console.log(err);
   });
  }
 
  FormChange = () => {
    this.setState({ FormDisplay: !this.state.FormDisplay });
  };
  render() {
    const ToggleForm = this.state.FormDisplay;
    const Display = this.state.Display;
    if(Display){
    return (
      <div className="edit">
        <div>
          <header>
          <Link to="/Products">戻る</Link>
          <h1>商品データ編集</h1>
          <a>*入力中に更新ボタンをおさいないでください</a>
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
                <a>単価:{t.MaterialCost}</a>
                <a>資材単位:{t.MaterialUnit}</a>
                <a>数量:{t.MaterialVolume}</a>
                <a>備考:{t.MaterialNote}</a>

                <button onClick={()=>{this.props.MaterialDelete(
                  
                  this.props.text.Productid,
                  t.MaterialName,
                  t.MaterialCost,
                  t.MaterialVolume,
                  t.id,
                  )}}>削除</button>
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

        {ToggleForm ? <MaterialEditForm /> : <ProductEditForm />}
      </div>
    );
        }else{return(<div>
          <h1>Loading...</h1>
          <Link to="/products">Back</Link>
        </div>);}
  }
}

const mapStateToProps = (state: AllState) => ({
  text: state.productReducer,
  text_list: state.materialReducer
});

export default connect(mapStateToProps, { ProductAction,MaterialAction,MaterialDelete })(Edit);
