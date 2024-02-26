import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvetsComponent } from './allvets.component';

describe('AllvetsComponent', () => {
  let component: AllvetsComponent;
  let fixture: ComponentFixture<AllvetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllvetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllvetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
