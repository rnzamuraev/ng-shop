import { Component, Input, ViewChild } from "@angular/core";

@Component({
  selector: "shop-btn",
  templateUrl: "./btn.component.html",
  styleUrls: ["./btn.component.scss"],
})
export class BtnComponent {
  @Input()
  public btnTextContent!: string | number;
  @Input()
  public isBtnCondition = false;
  // @ViewChild("btnElement", { static: true })
  // public btnElement!: HTMLButtonElement;
}
