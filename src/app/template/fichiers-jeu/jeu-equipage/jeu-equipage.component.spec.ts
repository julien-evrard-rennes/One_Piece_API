import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuEquipageComponent } from './jeu-equipage.component';

describe('JeuEquipageComponent', () => {
  let component: JeuEquipageComponent;
  let fixture: ComponentFixture<JeuEquipageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuEquipageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuEquipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
