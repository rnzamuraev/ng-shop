import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../types/authState.interface";
import { state } from "@angular/animations";
import { SignUpAction } from "./actions/sign-up.action";
import { ESignUp } from "./actionsTypes";

const initialState: IAuthState = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(SignUpAction, state => ({ ...state, isSubmitting: true }))
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
