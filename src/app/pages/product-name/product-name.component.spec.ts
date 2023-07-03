import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNameComponent } from './product-name.component';

describe('ProductNameComponent', () => {
  let component: ProductNameComponent;
  let fixture: ComponentFixture<ProductNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductNameComponent]
    });
    fixture = TestBed.createComponent(ProductNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
