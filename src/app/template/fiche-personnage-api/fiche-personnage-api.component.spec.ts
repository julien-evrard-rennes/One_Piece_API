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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
