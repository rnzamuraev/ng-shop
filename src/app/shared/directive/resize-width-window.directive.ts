import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[shopHidden]",
  exportAs: "hiddenControl",
})
export class ResizeWidthWindowDirective {
  private size = 0;

  @HostBinding("style.visibility")
  public visibility!: "visible" | "hidden";
  // @HostListener("window:resize", ["$event"])
  // public onResizeHandler(event: any) {
  //   console.log(event.target.innerWidth);
  //   // this.size = event.target.innerWidth;
  //   this.width = 200;
  // }

  // constructor() {}
  show() {
    this.visibility = "visible";
  }
  hide() {
    this.visibility = "hidden";
  }
}
