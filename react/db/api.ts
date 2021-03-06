import axios from 'axios';
import { Action } from 'redux';
import { MaterialAction, MaterialDeleteAction, MaterialReset, ProductAction, ProductListAction, ProductReset, P_ResetListAction } from '../actions/ActionCreator';
import { Actions } from 'react/actions/ActionTypes';
import { AllState } from 'react/Reducer';
import { ThunkAction } from 'redux-thunk'
import { push } from 'connected-react-router';

//---Product---
//all
export const ProductAll = (): ThunkAction<
  void,
  AllState,
  null
  , Action> => async dispatch => {
    axios.get(`http://localhost:3000/api/v1/products`)
      .then(response => {for (var i=0; i < response.data.length; ++ i){
           console.log(response.data[i].name,response.data[i].price,response.data[i].cost,response.data[i].category)
           
        dispatch(ProductListAction(
        response.data[i].product_id,
        response.data[i].name,
        response.data[i].price,
        response.data[i].cost,
        response.data[i].category,
     ))
       }
    
      })
      .catch(err => {
        console.log(err);
      });

  }
export const Reset=(): ThunkAction<void,AllState,null,Action> => async dispatch=>{
if (dispatch(ProductReset())){
  dispatch(MaterialReset())
dispatch(push("/new"))

}else{return}

  }
  //Products only
  export const Reset2=(): ThunkAction<void,AllState,null,Action> => async dispatch=>{
    if (dispatch(ProductReset())){
      dispatch(P_ResetListAction())
      dispatch(MaterialReset())
     
    }else{return}
    
      }
//product_find
export const ProductFind= (ProductId:number): ThunkAction<
void,
AllState,
null
, Action> => async dispatch => {
  axios.get(`http://localhost:3000/api/v1/products/${ProductId}`)
      .then(response => {
        //console.log(response.data.name)
        dispatch(ProductAction(response.data.id, response.data.name, response.data.price, response.data.cost, response.data.category))
        
      })
      .catch(err => {
        console.log(err);
      });
}
//show
export const ProductShow= (ProductId:number): ThunkAction<
void,
AllState,
null
, Action> => async dispatch => {
  axios.get(`http://localhost:3000/api/v1/products/${ProductId}`)
      .then(response => {
        //console.log(response.data.name)
        dispatch(ProductAction(response.data.id, response.data.name, response.data.price, response.data.cost, response.data.category))
        dispatch(push("/show"))
      })
      .catch(err => {
        console.log(err);
      });
}
//create
export const ProductSubmit = (
  ProductName: string,
  ProductPrice: string,
  ProductCost: string,
  Category: string,
): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.post(`http://localhost:3000/api/v1/products/create?name=${ProductName}&price=${ProductPrice}&material_cost=${ProductCost}&category=${Category}`)
      .then(response => {
        console.log(response.data)
        dispatch(ProductAction(
          response.data.id, 
          ProductName, 
          ProductPrice, 
          ProductCost, 
          Category,
          ))
      
      })
      .catch(err => {
        console.log(err);
      });

  }


//edit

export const ProductEdit = (
  ProductId:number,
  ProductName: string,
  ProductPrice: string,
  ProductCost: string,
  Category: string,
  Image:string
): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.post(`http://localhost:3000/api/v1/products/edit?id=${ProductId}&name=${ProductName}&price=${ProductPrice}&material_cost=${ProductCost}&category=${Category}`)
      .then(response => {
        console.log(response.data)
        dispatch(ProductAction(
          response.data.id, 
          ProductName,
          ProductPrice,
          ProductCost,
          Category,
          ))
      })
      .catch(err => {
        console.log(err);
      });
  };

  export const ProductShowEdit= (ProductId:number): ThunkAction<
  void,
  AllState,
  null
  , Action> => async dispatch => {
    axios.get(`http://localhost:3000/api/v1/products/${ProductId}`)
        .then(response => {
          console.log(response.data.id)
          dispatch(ProductAction(response.data.id, response.data.name, response.data.price, response.data.cost, response.data.category))
          dispatch(push("/edit"))
        })
        .catch(err => {
          console.log(err);
        });
  }
//delete
export const ProductDelete = (ProductId:number,id:number): ThunkAction<
void,
AllState,
null
, Action> => async dispatch => {
    axios.delete(`http://localhost:3000/api/v1/products/delete?id=${ProductId}`)
      .then(response => {
        console.log(`deleted product at id:${ProductId}`)
        location.reload()

      })
      .catch(err => {
        console.log(err);
      });
  };
//---Material---
//create
export const MaterialSubmit = (
  Product_id:number,
  MaterialName: string,
  MaterialCost: string,
  MaterialUnit: string,
  MaterialVolume: string,
  MaterialNote: string
  ): ThunkAction<
    void,
    AllState,
    null
    , Actions> => async dispatch => {
      axios.post(`http://localhost:3000/api/v1/materials/create?product_id=${Product_id}&name=${MaterialName}&cost=${MaterialCost}&volume=${MaterialVolume}&unit=${MaterialUnit}&note=${MaterialNote}`)
        .then(response => {
          dispatch(MaterialAction(
            response.data.id,
            response.data.name,
            MaterialCost,
            MaterialUnit,
            MaterialVolume,
            MaterialNote,
          ))
        })
        .catch(err => {
          console.log(err);
        });
    };

export const MaterialDelete = (
  Product_id:number,
  MaterialName: string,
  MaterialCost: string,
  MaterialVolume: string,
  id:number
): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.delete(`http://localhost:3000/api/v1/materials/delete?product_id=${Product_id}&name=${MaterialName}&cost=${MaterialCost}&volume=${MaterialVolume}`)
      .then(response => {
        dispatch(MaterialDeleteAction(id))
      })
      .catch(err => {
        console.log(Product_id,MaterialName,MaterialCost,MaterialVolume)
        console.log(err);
      });
  };


// test(Product.all)
export const test = () => {
  axios
    .get(`http://localhost:3000/api/v1/products`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
}
