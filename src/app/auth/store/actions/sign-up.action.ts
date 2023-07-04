import { createAction, props } from "@ngrx/store";
import { ESignUp } from "../actionsTypes";
import { ICreateUserRequest } from "src/app/auth/types/auth.interface";

export const SignUpAction = createAction(ESignUp.SIGN_AP, props<ICreateUserRequest>());
