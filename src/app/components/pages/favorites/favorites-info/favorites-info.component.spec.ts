import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesInfoComponent } from './favorites-info.component';

describe('FavoritesInfoComponent', () => {
  let component: FavoritesInfoComponent;
  let fixture: ComponentFixture<FavoritesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesInfoComponent]
    });
    fixture = TestBed.createComponent(FavoritesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
