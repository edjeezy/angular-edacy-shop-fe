import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCarousselComponent } from './categories-caroussel.component';

describe('CategoriesCarousselComponent', () => {
  let component: CategoriesCarousselComponent;
  let fixture: ComponentFixture<CategoriesCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesCarousselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
