import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessComponent } from './less.component';

describe('LessComponent', () => {
  let component: LessComponent;
  let fixture: ComponentFixture<LessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessComponent]
    });
    fixture = TestBed.createComponent(LessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
