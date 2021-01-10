import { createStore, Reducer, Middleware, applyMiddleware } from "redux";
import { AuthAction, AuthState } from "./modules/auth/types";

export interface StoreState {
  auth: AuthState;
}

export type StoreAction = AuthAction;

export default function CcreateStore(
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
