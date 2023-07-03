import { createAction, props } from "@ngrx/store";
import { ECheckTheEmail } from "../actionsTypes";
import { ICheckTheEmailRequest } from "src/app/shared/ui/modal/sign-in/sign-in.interface";

export const CheckTheEmailAction = createAction(
  ECheckTheEmail.CHECK_EMAIL,
  props<ICheckTheEmailRequest>()
);
