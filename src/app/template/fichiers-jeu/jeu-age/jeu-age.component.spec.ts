import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuAgeComponent } from './jeu-age.component';

describe('JeuAgeComponent', () => {
  let component: JeuAgeComponent;
  let fixture: ComponentFixture<JeuAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuAgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
