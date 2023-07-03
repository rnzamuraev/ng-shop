import {
  Component,
  ComponentRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { ModalService } from "src/app/shared/ui/modal/modal.service";
import { MyAccountComponent } from "./my-account/my-account.component";
import { SignInComponent } from "./sign-in/sign-in.component";

@Component({
  selector: "shop-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit, OnDestroy {
  public isOpen = false;
  public modalContentRef!: ComponentRef<SignInComponent | MyAccountComponent>;
  // public modalMyAccountContentRef!: ComponentRef<MyAccountComponent>;
  public unsubscribeModalSequence$!: Subscription;
  private escape = 27;

  @ViewChild("modalComponent", { read: ViewContainerRef })
  private vcr!: ViewContainerRef;

  constructor(
    private modalService: ModalService // private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    // this.unsubscribeModalSequence$ = this.modalService.modalSequence$.subscribe(data => {
    this.modalService.modalSequence$.subscribe(data => {
      if (data === null) {
        this.isOpen = false;
        return;
      }

      console.log("подписка");
      const { component, context } = data;

      this.modalContentRef = this.vcr.createComponent<SignInComponent | MyAccountComponent>(
        component
      );
      // this.modalMyAccountContentRef = this.vcr.createComponent(data.MyAccountcomponent);

      Object.keys(data.context).forEach((key: string) => {
        console.log(key);

        // if (key === "onCloseModal") {
        //   this.modalContentRef.instance[key] = data.context[key];
        // }
      });

      // this.modalContentRef.instance.onCloseModal = data.context.onCloseModal;
      this.openModal();
      this.modalService.setModalViewContentRef(this.modalContentRef);
    });
  }

  openModal() {
    this.modalService.overflowOn();
    this.isOpen = true;
  }

  @HostListener("window:keydown", ["$event.keyCode"])
  escapeCloseModal(code: KeyboardEvent) {
    console.log(code);

    if (+code !== this.escape) {
      console.log("escape");
      return;
    }

    this.modalService.close();
  }

  onCloseModal() {
    this.modalService.close();
  }

  ngOnDestroy(): void {
    // this.unsubscribeModalSequence$.unsubscribe();
  }
}
