import axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { ProductFind } from '../../db/api';
import { AllState, PListType } from 'react/Reducer';
import { ProductListAction } from '../../actions/ActionCreator';
import { Link } from 'react-router-dom';


type listprops={
ProductListAction:any
lists:PListType;
Rqtest:(ProductId:number)=>void;
ProductFind:(ProductId:number)=>void;
}
type Display={
    display:boolean;
    
}

class Products extends React.Component<listprops,Display>{
    constructor(props: listprops) {
        super(props);
    
        this.state = {
          display: false,
        };
      }
    componentDidMount(){
          axios.get(`http://localhost:3000/api/v1/products`)
            .then(response => {for (var i=0; i < response.data.length; ++ i){
                 console.log(response.data[i].id,response.data[i].name,response.data[i].price,response.data[i].cost,response.data[i].category)
                 
              this.props.ProductListAction(
              response.data[i].id,
              response.data[i].name,
              response.data[i].price,
              response.data[i].cost,
              response.data[i].category)
                
             }
          this.setState({display:true})
            })
            .catch(err => {
              console.log(err);
            });
        }

    render(){
        if(this.state.display){
     return(
        <div>
        <Link to="/Top">戻る</Link>

            <h1>商品一覧</h1>
             <ul>
             {this.props.lists.map(t=>{
              return( 
               <div key={t.id}　>
                 <button onClick={()=>{this.props.ProductFind(t.ProductsId)}}>test</button>
                 <a>{t.ProductsId}</a>

                <a>{t.name}</a>

               </div>
               )
        })}
           </ul>  
        </div>

     )}else{
         return(
         <div>
             <h1>Loading...</h1>
     </div>);}
    }
    }


const mapStateToProps = (state: AllState) => ({
    lists:state.PListReducer
});

export default connect(mapStateToProps,{ProductListAction,ProductFind})(Products);