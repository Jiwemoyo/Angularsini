import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeroComponent } from './pizzero.component';

describe('PizzeroComponent', () => {
  let component: PizzeroComponent;
  let fixture: ComponentFixture<PizzeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
