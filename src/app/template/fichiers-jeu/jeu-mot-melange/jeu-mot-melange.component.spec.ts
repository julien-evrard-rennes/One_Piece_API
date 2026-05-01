/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { JeuMotMelangeComponent } from './jeu-mot-melange.component';

describe('JeuMotMelangeComponent', () => {
  let component: JeuMotMelangeComponent;
  let fixture: ComponentFixture<JeuMotMelangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuMotMelangeComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JeuMotMelangeComponent);
    component = fixture.componentInstance;

    // Fournir un personnage minimal avant detectChanges
    component.personnage = {
      id: 1,
      nom: 'Monkey',
      prenom: 'Luffy',
      nom_complet: 'Monkey D Luffy',
      surnom: '',
      particule: 'D.',
      age: 19,
      groupes: [],
      job: 'Capitaine',
      size: '174cm',
      birthday: '',
      bounty: '',
      status: 'vivant',
      crew: {} as any,
      fruit: {} as any,
      groupe: null,
    } as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});