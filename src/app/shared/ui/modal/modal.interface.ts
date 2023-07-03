import { SignInComponent } from "src/app/shared/ui/modal/sign-in/sign-in.component";
import { MyAccountComponent } from "./my-account/my-account.component";

export interface ICreateANewModal {
  component: typeof SignInComponent | typeof MyAccountComponent;
  context: {
    // isLogin?: boolean;
    // open?: () => void;
    // onCloseModal?: () => void;
  };
}
