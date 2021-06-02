import axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { ProductShow,ProductShowEdit,ProductDelete } from '../../db/api';
import { AllState, PListType } from 'react/Reducer';
import { ProductListAction } from '../../actions/ActionCreator';
import { Link } from 'react-router-dom';
import{Reset2} from '../../db/api';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

type listprops={
ProductListAction:(
  id:number,
  name:string,
  price:string,
  cost:string,
  category:string,
  image:string
  )=>void;
list:PListType[];

Rqtest:(ProductId:number)=>void;
ProductShow:(ProductId:number)=>void;
ProductDelete:(ProductId:number,id:number)=>void;
ProductShowEdit:(ProductId:number)=>void;
Reset2:()=>void;
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
   
       this.props.Reset2();
          axios.get(`http://localhost:3000/api/v1/products`)
            .then(response => {for (var i=0; i < response.data.length; ++ i){
                 
              this.props.ProductListAction(
              response.data[i].id,
              response.data[i].name,
              response.data[i].price,
              response.data[i].cost,
              response.data[i].category,
              response.data[i].image
              )
                
             };
           
          this.setState({display:true});
            })
            .catch(err => {
              console.log(err);
            });
        }

    render(){
      const lists= this.props.list
        if(this.state.display){
     return(
        <div className="products" >
          <header className="header">
        <Link to="/Top">戻る</Link>

            <h1>商品一覧</h1>
            </header>
             <ul>
             {lists.map(t=>{
              return( 
               <div key={t.id}　>
                 <Card className="Card">
                   
                   <CardBody>
                 <CardTitle tag="h4">{t.name}</CardTitle>

                 <Button onClick={()=>{this.props.ProductShow(t.ProductsId)}} color="info">詳細</Button><br />
                 <Button onClick={()=>{this.props.ProductShowEdit(t.ProductsId)}}color="success">編集</Button><br />
                 <Button onClick={()=>{this.props.ProductDelete(t.ProductsId,t.id)}}>削除</Button>
                 </CardBody>
                </Card>
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
    list:state.PListReducer
});

export default connect(mapStateToProps,{ProductListAction,ProductShow,ProductShowEdit,ProductDelete,Reset2})(Products);