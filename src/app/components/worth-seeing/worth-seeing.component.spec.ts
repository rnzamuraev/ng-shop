import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorthSeeingComponent } from './worth-seeing.component';

describe('WorthSeeingComponent', () => {
  let component: WorthSeeingComponent;
  let fixture: ComponentFixture<WorthSeeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorthSeeingComponent]
    });
    fixture = TestBed.createComponent(WorthSeeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
