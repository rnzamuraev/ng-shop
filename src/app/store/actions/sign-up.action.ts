import { createAction, props } from "@ngrx/store";
import { ESignUp } from "../actionsTypes";
import { INewUserRequest } from "src/app/shared/ui/modal/sign-in/sign-in.interface";

export const SignUpAction = createAction(ESignUp.SIGN_AP, props<INewUserRequest>());
