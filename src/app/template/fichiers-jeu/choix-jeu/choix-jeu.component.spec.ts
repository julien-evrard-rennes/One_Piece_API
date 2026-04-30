import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ChoixJeuComponent } from './choix-jeu.component';

describe('ChoixJeuComponent', () => {
  let component: ChoixJeuComponent;
  let fixture: ComponentFixture<ChoixJeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChoixJeuComponent],
      providers: [
      provideRouter([]),
      provideHttpClient(),
      provideHttpClientTesting(),
    ]
    });
    fixture = TestBed.createComponent(ChoixJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
