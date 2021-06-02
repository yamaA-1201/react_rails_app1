import { ProductAction,ProductReset,MaterialAction,MaterialReset,MaterialDeleteAction,ProductListAction,P_DeleteAction,P_ResetListAction } from './ActionCreator';

export const PRODUCT_ACTION = 'PRODUCT_ACTION';
export const PRODUCT_RESET = 'PRODUCT_RESET';

export const MATERIAL_ACTION = 'MATERIAL_ACTION';
export const MATERIAL_DELETE = 'MATERIAL_DELETE';
export const MATERIAL_RESET = 'MATERIAL_RESET';

export const ASYNC_ALL_ACTION = 'ASYNC_ALL_ACTION';
export const PRODUCT_LIST_ACTION = 'PRODUCT_LIST_ACTION';
export const P_DELETE_LIST_ACTION = 'P_DELETE_LIST_ACTION';
export const P_RESET_LIST_ACTION = 'P_RESET_LIST_ACTION';

export type ProductActions = ReturnType<typeof ProductListAction|typeof P_DeleteAction|typeof P_ResetListAction>
export type Actions = ReturnType<typeof ProductAction |typeof ProductReset |typeof  MaterialAction|typeof MaterialReset|typeof MaterialDeleteAction>;
// 型格納所
