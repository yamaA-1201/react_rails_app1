import { Actions, ASYNC_ALL_ACTION, PRODUCT_ACTION,MATERIAL_ACTION, PRODUCT_LIST_ACTION } from './ActionTypes';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { AllState } from '../Reducer';

//商品
export const ProductAction = (
  Productid:number,
  ProductName: string,
  ProductPrice: string,
  ProductCost: string,
  Category: string,
) => ({
  type: 'PRODUCT_ACTION' as typeof PRODUCT_ACTION,
  Productid,
  ProductName,
  ProductPrice,
  ProductCost,
  Category,
});
let P_Id:number = 0;
export const ProductListAction=(
  ProductId:number,
  Name:string,
  Price:string,
  Cost:string,
  Category:string)=>({
 type: 'PRODUCT_LIST_ACTION' as typeof PRODUCT_LIST_ACTION,
 ProductId,
 Name,
 Price,
 Cost,
 Category,
 id:P_Id++
})
//資材
let nextId:number = 0;
export const MaterialAction = (
  Product_Id:number,
  MaterialName:string,
  MaterialPrice:string,
  MaterialUnit:string,
  MaterialVolume:string,
  MaterialNote:string,
) => ({
  type: 'MATERIAL_ACTION' as typeof MATERIAL_ACTION,
  Product_Id,
  MaterialName,
  MaterialPrice,
  MaterialUnit,
  MaterialVolume,
  MaterialNote,
  id:nextId++
})

// シンクテスト参考用
export const AsyncAllAction = (name: string) => ({
  type: 'ASYNC_ALL_ACTION' as typeof ASYNC_ALL_ACTION,
  name,
});
export const AsyncAll = (): ThunkAction<
  void,
  AllState,
  null,
  Actions
> => async dispatch => {
  axios
    .get(`http://localhost:3000/api/v1/products`)
    .then(response => {
      dispatch(AsyncAllAction(response.data.name));
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
};
