import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuMotMelangeComponent } from './jeu-mot-melange.component';

describe('JeuMotMelangeComponent', () => {
  let component: JeuMotMelangeComponent;
  let fixture: ComponentFixture<JeuMotMelangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuMotMelangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuMotMelangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
