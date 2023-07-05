import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import {
  ICreateUserRequest,
  ISaveChangeRequest,
  IUserResponse,
} from "src/app/auth/types/auth.interface";
import { MyDetailsService } from "./my-details.service";

@Component({
  selector: "shop-my-details",
  templateUrl: "./my-details.component.html",
  styleUrls: ["./my-details.component.scss"],
})
export class MyDetailsComponent implements OnInit {
  public myBtnTextContent = "Save change";
  public myBtnTextEdit = "Edit";
  public isBtnCondition = false;
  @Input()
  public currentUser!: IUserResponse;
  private userFirstName = "";
  private userLastName = "";
  public form!: FormGroup;
  public userData = [
    {
      category: "First name * ",
      data: this.userFirstName,
      controlName: "firstName",
      type: "text",
    },
    {
      category: "Last name",
      data: this.userLastName,
      controlName: "lastName",
      type: "text",
    },
    {
      category: "Email address * ",
      data: this.currentUser?.email,
      controlName: "email",
      type: "email",
    },
    {
      category: "Avatar * ",
      data: this.currentUser?.avatar,
      controlName: "avatar",
      type: "text",
    },
  ];

  constructor(
    private myDetailsService: MyDetailsService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.setUserData();
    this.initForm();
  }

  private setUserData() {
    const name = this.currentUser.name.split(" ");
    this.userFirstName = name[0];
    if (name.length > 0) {
      this.userLastName = name[1];
    }
    console.log(name);
  }

  private initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.userFirstName),
      lastName: new FormControl(this.userLastName),
      email: new FormControl(this.currentUser.email),
      avatar: new FormControl(this.currentUser.avatar),
    });
  }

  private subscribePutSaveChange(data: ICreateUserRequest, id: number) {
    this.myDetailsService.putSaveChange(data, id).subscribe(user => {
      console.log(user);

      if (typeof user !== "number") {
        console.log(user);
        this.currentUser = user;
        this.setUserData();
        this.initForm();
        this.currentUserService.setUser$(user);
        this.currentUserService.setUserName$(user.name);
      }
    });
  }

  public createData() {
    let lastName = this.form.value.lastName;
    if (lastName === null) lastName = "";

    const data: ISaveChangeRequest = {
      name: `${this.form.value.firstName} ${lastName}`.trim(),
      email: this.form.value.email,
      password: this.currentUser.password,
      avatar: this.form.value.avatar,
    };

    return data;
  }

  public onChangeUserData() {
    this.subscribePutSaveChange(this.createData(), this.currentUser.id);
    console.log(this.createData());
  }
}
