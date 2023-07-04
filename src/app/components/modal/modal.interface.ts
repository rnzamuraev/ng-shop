import { LogInComponent } from "src/app/auth/components/log-in/log-in.component";
import { OpenAccountComponent } from "src/app/auth/components/open-account/open-account.component";

export interface ICreateANewModal {
  component: typeof LogInComponent | typeof OpenAccountComponent;
  context: {
    // isLogin?: boolean;
    // open?: () => void;
    // onCloseModal?: () => void;
  };
}
