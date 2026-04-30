import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PersonnageMock } from '../../models/PersonnageMock';
import { CommonModule } from '@angular/common';
import { MockPersoService } from '../../services/mock-perso-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-formulaire',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './test-formulaire.component.html',
  styleUrl: './test-formulaire.component.scss'
})
export class TestFormulaireComponent implements OnInit{
  private formbuilder = inject(FormBuilder);
  private mockPersoService = inject(MockPersoService);
  private router = inject(Router);


  personnageMockForm!: FormGroup;
  personnagePreview!: Observable<PersonnageMock>;
  personnageRegex!: RegExp;
  primeRegex!: RegExp;

ngOnInit(): void {
  this.personnageRegex = /[a-zA-Z0-9_:-]{100}/;
  this.primeRegex=/^[0-9]{4,6}$/;
  this.personnageMockForm = this.formbuilder.group({
    nom:[null, Validators.required],
    prenom:[null, Validators.required],
    surnom:[''],
    particule:[null],
    prime:[null, [Validators.required]],
    groupes:[null, Validators.required]
  }, {
updateOn: 'blur'

  });
  this.personnagePreview = this.personnageMockForm.valueChanges.pipe(
    map(formValue => ({
      ...formValue,
      id:0,
    }))
  );
}

onSubmitForm(): void{
  this.mockPersoService.addPersonnageMock(this.personnageMockForm.value);
  this.router.navigateByUrl('listePersonnages');
}

}
