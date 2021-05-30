import { ProductAction,MaterialAction, AsyncAllAction,ProductListAction } from './ActionCreator';

export const PRODUCT_ACTION = 'PRODUCT_ACTION';
export const MATERIAL_ACTION = 'MATERIAL_ACTION'
export const ASYNC_ALL_ACTION = 'ASYNC_ALL_ACTION';
export const PRODUCT_LIST_ACTION = 'PRODUCT_LIST_ACTION';

export type ProductActions = ReturnType<typeof ProductListAction>
export type Actions = ReturnType<typeof ProductAction |typeof  MaterialAction| typeof AsyncAllAction>;
// 型格納所
