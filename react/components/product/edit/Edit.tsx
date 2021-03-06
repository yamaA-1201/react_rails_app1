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
          <Link to="/Products">??????</Link>
          <h1>?????????????????????</h1>
          <a>*????????????????????????????????????????????????????????????</a>
          </header>
          <h2>?????????</h2>
          <h2>{this.props.text.ProductName}</h2>
          <br/>
          <h3>???????????????</h3>
          <br/>
          <table>
            <tr>
          <td>??????:{this.props.text.ProductPrice}</td>
          </tr>
          <tr>
          <td>??????:{this.props.text.ProductCost}</td>
          </tr>
          <tr>
          <td>???????????????:{this.props.text.Category}</td>
          </tr>
          </table>
    
          <br />
          <ul>
          {this.props.text_list.map((t) =>{
            return(
              <div key={t.id}>
                <a>?????????:{t.MaterialName}</a>
                <a>??????:{t.MaterialCost}</a>
                <a>????????????:{t.MaterialUnit}</a>
                <a>??????:{t.MaterialVolume}</a>
                <a>??????:{t.MaterialNote}</a>

                <button onClick={()=>{this.props.MaterialDelete(
                  
                  this.props.text.Productid,
                  t.MaterialName,
                  t.MaterialCost,
                  t.MaterialVolume,
                  t.id,
                  )}}>??????</button>
              </div>
            )
          })}
          </ul>
          <hr></hr>
        </div>
        
        {ToggleForm ? (
          <button onClick={this.FormChange}>????????????</button>
        ) : (
          <button onClick={this.FormChange}>????????????</button>
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
