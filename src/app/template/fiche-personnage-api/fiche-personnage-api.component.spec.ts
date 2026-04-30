import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FichePersonnageApiComponent } from './fiche-personnage-api.component';

describe('FichePersonnageApiComponent', () => {
  let component: FichePersonnageApiComponent;
  let fixture: ComponentFixture<FichePersonnageApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichePersonnageApiComponent],
      providers: [
        provideRouter([]),            
        provideHttpClient(),          
        provideHttpClientTesting(),   
      ]      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichePersonnageApiComponent);
    component = fixture.componentInstance;
    component.personnageAPI = {
    id: 1, name: 'Monkey D Luffy', job: 'Capitaine',
    size: '174cm', birthday: '', age: 19,
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
