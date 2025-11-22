import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormulaireComponent } from './test-formulaire.component';

describe('TestFormulaireComponent', () => {
  let component: TestFormulaireComponent;
  let fixture: ComponentFixture<TestFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
