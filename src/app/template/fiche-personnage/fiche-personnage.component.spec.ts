/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FichePersonnageComponent } from './fiche-personnage.component';

describe('FichePersonnageComponent', () => {
  let component: FichePersonnageComponent;
  let fixture: ComponentFixture<FichePersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichePersonnageComponent],
      providers: [
        provideRouter([]),            
        provideHttpClient(),          
        provideHttpClientTesting(),   
      ]
    }).compileComponents();
    
fixture = TestBed.createComponent(FichePersonnageComponent);
component = fixture.componentInstance;

component.personnage = {
  id: 1, nom_complet: 'Monkey D Luffy', nom: 'Monkey',
  prenom: 'Luffy', surnom: '', particule: 'D.', age: 19,
  groupes: [], job: 'Capitaine', size: '174cm', birthday: '',
  bounty: '3.000.000.000', status: 'vivant',
  crew: { id: 1, name: "L'équipage du Chapeau de Paille",
          description: '', status: 'actif', number: '10',
          roman_name: '', total_prime: '', is_yonko: 'true' },
  fruit: { id: 1, name: 'Fruit du Gum-Gum', description: '',
           type: 'Paramecia', filename: '', roman_name: '',
           technicalFile: '' },
  groupe: null,
} as any;

fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
