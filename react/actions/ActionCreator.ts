import { 
  PRODUCT_ACTION,MATERIAL_ACTION, 
  PRODUCT_LIST_ACTION,
  PRODUCT_RESET,
  MATERIAL_RESET,
  MATERIAL_DELETE,
  P_DELETE_LIST_ACTION, 
  P_RESET_LIST_ACTION} from './ActionTypes';

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

export const ProductReset=(

)=>({
  type:'PRODUCT_RESET' as typeof PRODUCT_RESET,

})
export const P_ResetListAction=(

  )=>({
    type:'P_RESET_LIST_ACTION' as typeof P_RESET_LIST_ACTION,
  
  })
export const MaterialReset=()=>({
type:'MATERIAL_RESET' as typeof MATERIAL_RESET,
})

let P_Id:number = 0;
export const ProductListAction=(
  ProductId:number,
  Name:string,
  Price:string,
  Cost:string,
  Category:string,
  )=>({
 type: 'PRODUCT_LIST_ACTION' as typeof PRODUCT_LIST_ACTION,
 ProductId,
 Name,
 Price,
 Cost,
 Category,
 id:P_Id++
})
export const P_DeleteAction=(id:number)=>({
  type:'P_DELETE_LIST_ACTION' as typeof P_DELETE_LIST_ACTION,
  id:id
  })
//資材
let nextId:number = 0;
export const MaterialAction = (
  Product_id:number,
  MaterialName:string,
  MaterialCost:string,
  MaterialUnit:string,
  MaterialVolume:string,
  MaterialNote:string,
) => ({
  type: 'MATERIAL_ACTION' as typeof MATERIAL_ACTION,
  Product_id,
  MaterialName,
  MaterialCost,
  MaterialUnit,
  MaterialVolume,
  MaterialNote,
  id:nextId++
})
export const MaterialDeleteAction=(id:number)=>({
type:'MATERIAL_DELETE' as typeof MATERIAL_DELETE,
id:id
})

