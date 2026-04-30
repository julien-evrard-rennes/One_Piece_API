import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupesComponent } from './list-groupes.component';

describe('ListGroupesComponent', () => {
  let component: ListeGroupesComponent;
  let fixture: ComponentFixture<ListeGroupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeGroupesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeGroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
