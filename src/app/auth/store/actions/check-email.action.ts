import { createAction, props } from "@ngrx/store";
import { ECheckTheEmail } from "../actionsTypes";
import { ICheckTheEmailRequest } from "src/app/auth/types/auth.interface";

export const CheckTheEmailAction = createAction(
  ECheckTheEmail.CHECK_EMAIL,
  props<ICheckTheEmailRequest>()
);
