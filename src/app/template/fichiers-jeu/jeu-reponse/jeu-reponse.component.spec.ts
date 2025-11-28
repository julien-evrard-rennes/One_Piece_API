import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuReponseComponent } from './jeu-reponse.component';

describe('JeuReponseComponent', () => {
  let component: JeuReponseComponent;
  let fixture: ComponentFixture<JeuReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuReponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
