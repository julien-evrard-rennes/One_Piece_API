import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FicheGroupeApiComponent } from './fiche-groupe-api.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('FicheGroupeApiComponent', () => {
  let component: FicheGroupeApiComponent;
  let fixture: ComponentFixture<FicheGroupeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheGroupeApiComponent],
      providers: [
        provideRouter([]),            
        provideHttpClient(),          
        provideHttpClientTesting(),   
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheGroupeApiComponent);
    component = fixture.componentInstance;
    component.groupeAPI = {
    id: 1, name: "L'équipage du Chapeau de Paille",
    description: '', status: 'actif', number: '10',
    roman_name: '', total_prime: '', is_yonko: 'true',
    capitaine: { id: 1, name: 'Monkey D Luffy' },
    membresListe: [],
  } as any;

  fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
