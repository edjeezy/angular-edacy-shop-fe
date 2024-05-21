import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingListProductComponent } from './landing-list-product.component';

describe('LandingListProductComponent', () => {
  let component: LandingListProductComponent;
  let fixture: ComponentFixture<LandingListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingListProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
