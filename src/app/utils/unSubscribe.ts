import { NgModule, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@NgModule({})
export class UnSubscribe implements OnDestroy {
  public unSubscriber$ = new Subject();
  ngOnDestroy(): void {
    // this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }

  // public arrSub: Subscription[] = [];

  // ngOnDestroy(): void {
  //   this.arrSub.forEach((el) => el.unsubscribe);
  // }
}
