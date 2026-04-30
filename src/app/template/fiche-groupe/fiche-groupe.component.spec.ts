import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FicheGroupeComponent } from './fiche-groupe.component';

describe('FicheGroupeComponent', () => {
  let component: FicheGroupeComponent;
  let fixture: ComponentFixture<FicheGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheGroupeComponent],
      providers: [
        provideRouter([]),            
        provideHttpClient(),          
        provideHttpClientTesting(),   
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheGroupeComponent);
    component = fixture.componentInstance;
    component.groupe = {
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
