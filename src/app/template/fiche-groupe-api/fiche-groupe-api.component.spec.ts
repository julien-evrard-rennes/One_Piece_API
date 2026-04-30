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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
