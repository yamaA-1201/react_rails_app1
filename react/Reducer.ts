// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Actions, ProductActions } from './actions/ActionTypes';
import { Reducer, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { store } from './Store';

export type productRootState = {
  Productid: number;
  ProductName: string;
  ProductPrice: string;
  ProductCost: string;
  Category: string;
  FormDisplay:boolean;
};
const pInitialState = {
  Productid: 0,
  ProductName: '',
  ProductPrice: '',
  ProductCost: '',
  Category: '',
  FormDisplay:false
};


export const productReducer = (state = pInitialState, action: Actions) => {
  switch (action.type) {
    case 'PRODUCT_ACTION':
      return {
        Productid:action.Productid,
        ProductName: action.ProductName,
        ProductPrice: action.ProductPrice,
        ProductCost: action.ProductCost,
        Category: action.Category,
        FormDisplay:true
      };
    case 'PRODUCT_RESET':
    return{
      Productid:'', 
      ProductName:'',
      ProductPrice: '',
      ProductCost: '',
      Category: '',
      FormDisplay:false
    };
    default:
      return state;
  }
};
export type PListType={
  id:number;
  ProductsId:number;
  name:string;
  price:string;
  cost:string;
  category:string;
}

export const PListReducer =(
  state:PListType[]=[],
  action:ProductActions)=>{
  switch(action.type){
    case 'PRODUCT_LIST_ACTION':
      return[
        ...state,
        {
          id:           action.id,
          ProductsId:    action.ProductId,
          name:         action.Name,
          price:        action.Price,
          material_cost:action.Cost,
          category:     action.Category,
      }]
      case 'P_RESET_LIST_ACTION':
        return[]
      case 'P_DELETE_LIST_ACTION':
        return state.filter(({id})=>
        id !== action.id
        )
      default:
        return state;
  }
}
//資材
export type MaterialRootState = {
  MaterialName:string,
  MaterialCost:string,
  MeterialUnit:string,
  MaterialVolume:string,
  MaterialNote:string,
}
export type TextType={
  id:number
  Product_id:number,
  MaterialName:string,
  MaterialCost:string,
  MaterialUnit:string,
  MaterialVolume:string,
  MaterialNote:string,
}
export const materialReducer = (
  state:TextType[]=[],
  action:Actions)=>{
switch(action.type){
  case 'MATERIAL_ACTION':
    return[
      ...state,
      {
      id:action.id,
      Product_id:action.Product_id,
  MaterialName:   action.MaterialName,
  MaterialCost:  action.MaterialCost,
  MaterialUnit:   action.MaterialUnit,
  MaterialVolume: action.MaterialVolume,
  MaterialNote:   action.MaterialNote,
    }]
    case'MATERIAL_RESET':
      return[]
      case'MATERIAL_DELETE':
      return state.filter(({id})=>
        id !== action.id
        )
    default:
      return state;
}
}


export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history) as Reducer,
    productReducer,
    PListReducer,
    materialReducer ,
    
  });
export type AllState = ReturnType<typeof store.getState>;
