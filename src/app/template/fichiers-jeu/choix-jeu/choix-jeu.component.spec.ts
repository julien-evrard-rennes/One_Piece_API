import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixJeuComponent } from './choix-jeu.component';

describe('ChoixJeuComponent', () => {
  let component: ChoixJeuComponent;
  let fixture: ComponentFixture<ChoixJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixJeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoixJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
