import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuReponseMotMelangeComponent } from './jeu-reponse-mot-melange.component';

describe('JeuReponseMotMelangeComponent', () => {
  let component: JeuReponseMotMelangeComponent;
  let fixture: ComponentFixture<JeuReponseMotMelangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuReponseMotMelangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuReponseMotMelangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
