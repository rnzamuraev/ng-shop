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
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { LogInComponent } from "src/app/auth/components/log-in/log-in.component";
import { OpenAccountComponent } from "src/app/auth/components/open-account/open-account.component";
import { ModalService } from "src/app/components/modal/modal.service";

@Component({
  selector: "shop-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit, OnDestroy {
  public isOpen = false;
  public isToken!: boolean;
  public modalContentRef!: ComponentRef<LogInComponent | OpenAccountComponent>;
  public unsubscribeModalSequence$!: Subscription;
  private escape = 27;

  @ViewChild("modalComponent", { read: ViewContainerRef })
  private vcr!: ViewContainerRef;

  constructor(private modalService: ModalService, private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    // this.unsubscribeModalSequence$ = this.modalService.modalSequence$.subscribe(data => {
    this.isToken = this.currentUserService.getIsToken;
    this.subscribeModalSequence();
    this.currentUserService.getIsToken$.subscribe(data => {
      this.isToken = data;
    });
  }

  private subscribeModalSequence() {
    this.unsubscribeModalSequence$ = this.modalService.modalSequence$.subscribe(data => {
      if (data === null) {
        this.isOpen = false;
        return;
      }

      console.log("подписка");
      const { component, context } = data;
      console.log("subscribeModalSequence: ", component);

      this.modalContentRef = this.vcr.createComponent<LogInComponent | OpenAccountComponent>(
        component
      );

      console.log("subscribeModalSequence: ", this.modalContentRef);

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
    console.log("this.unsubscribeModalSequence$.unsubscribe();");

    this.unsubscribeModalSequence$.unsubscribe();
  }
}
