import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IUserResponse } from "src/app/shared/ui/modal/sign-in/sign-in.interface";

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
      category: "Avatar",
      data: this.currentUser?.avatar,
      controlName: "avatar",
      type: "text",
    },
  ];

  ngOnInit(): void {
    this.setUserData();
    this.initForm();
  }

  private setUserData() {
    const name = this.currentUser.name.split(",");
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

  public createData() {
    return {
      name: `${this.form.value.firstName} ${this.form.value.lastName}`,
      email: this.form.value.email,
      avatar: this.form.value.avatar,
    };
  }

  public onChangeUserData() {
    this.createData();
    console.log(this.createData());
  }
}
