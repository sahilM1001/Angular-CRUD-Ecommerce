import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwAllProductsByDateComponent } from './viw-all-products-by-date.component';

describe('ViwAllProductsByDateComponent', () => {
  let component: ViwAllProductsByDateComponent;
  let fixture: ComponentFixture<ViwAllProductsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwAllProductsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwAllProductsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
