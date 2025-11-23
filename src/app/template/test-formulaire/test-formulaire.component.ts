import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PersonnageMock } from 'src/app/models/PersonnageMock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-formulaire',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './test-formulaire.component.html',
  styleUrl: './test-formulaire.component.scss'
})
export class TestFormulaireComponent implements OnInit{

  personnageMockForm!: FormGroup;
  personnagePreview!: Observable<PersonnageMock>;

  constructor(private formbuilder: FormBuilder) { }

ngOnInit(): void {
  this.personnageMockForm = this.formbuilder.group({
    nom:[null],
    prenom:[null],
    surnom:[null],
    particule:[null],
    prime:[null],
    groupes:[null],

  });
  this.personnagePreview = this.personnageMockForm.valueChanges.pipe(
    map(formValue => ({
      ...formValue,
      id:0,
    }))
  );
}

onSubmitForm(): void{
  console.log(this.personnageMockForm.value);
}

}
