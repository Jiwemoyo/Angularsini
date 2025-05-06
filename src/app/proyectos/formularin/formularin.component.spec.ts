import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularinComponent } from './formularin.component';

describe('FormularinComponent', () => {
  let component: FormularinComponent;
  let fixture: ComponentFixture<FormularinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
