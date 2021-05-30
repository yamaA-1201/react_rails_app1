import axios from 'axios';
import { Action } from 'redux';
import { MaterialAction, ProductAction, ProductListAction } from '../actions/ActionCreator';
import { Actions } from 'react/actions/ActionTypes';
import { AllState } from 'react/Reducer';
import { ThunkAction } from 'redux-thunk'
import { push } from 'connected-react-router';

//---Product---
//all
//--test--



//--test--
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
        response.data[i].category))
       }
    
      })
      .catch(err => {
        console.log(err);
      });

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
//create
export const ProductSubmit = (
  ProductName: string,
  ProductPrice: string,
  ProductCost: string,
  Category: string
): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.post(`http://localhost:3000/api/v1/products/create?name=${ProductName}&price=${ProductPrice}&material_cost=${ProductCost}&category=${Category}`)
      .then(response => {
        console.log(response.data)
        dispatch(ProductAction(response.data.id, ProductName, ProductPrice, ProductCost, Category))
      
      })
      .catch(err => {
        console.log(err);
      });

  }


//edit

export const ProductEdit = (): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.put('http://localhost:3000/api/v1/products')
      .then(response => {
        dispatch(ProductAction(response.data.Productid, response.data.ProductName,
          response.data.ProductPrice,
          response.data.ProductCost,
          response.data.Category))
      })
      .catch(err => {
        console.log(err);
      });
  };

//delete
export const ProductDelete = (): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.delete('http://localhost:3000/api/v1/products')
      .then(response => {
        dispatch(console.log)
      })
      .catch(err => {
        console.log(err);
      });
  };
//---Material---
//create
export const MaterialSubmit = (
  Product_Id:number,
  MaterialName: string,
  MaterialPrice: string,
  MaterialUnit: string,
  MaterialVolume: string,
  MaterialNote: string): ThunkAction<
    void,
    AllState,
    null
    , Actions> => async dispatch => {
      axios.post(`http://localhost:3000/api/v1/materials/create?product_id=${Product_Id}&name=${MaterialName}&cost=${MaterialUnit}&volume=${MaterialVolume}&note=${MaterialNote}`)
        .then(response => {
          dispatch(MaterialAction(
            response.data.id,
            response.data.MaterialName,
            response.data.MaterialPrice,
            response.data. MaterialUnit,
            response.data.MaterialVolume,
            response.data.MaterialNote,
          ))
          console.log(
            response.data.id,
            MaterialName,
            MaterialPrice,
            MaterialUnit,
            MaterialVolume,
            MaterialNote,)
        })
        .catch(err => {
          console.log(err);
        });
    };
//edit
export const MaterialEdit = (): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.put('http://localhost:3000/api/v1/materials')
      .then(response => {
        dispatch(MaterialAction(
          response.data.id,
          response.data.MaterialName,
          response.data.MaterialPrice,
          response.data.MaterialUnit,
          response.data.MaterialVolume,
          response.data.MaterialNote,
        ))
      })
      .catch(err => {
        console.log(err);
      });
  };

export const MaterialDelete = (): ThunkAction<
  void,
  AllState,
  null
  , Actions> => async dispatch => {
    axios.delete('http://localhost:3000/api/v1/material')
      .then(response => {
        dispatch(console.log)
      })
      .catch(err => {
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
