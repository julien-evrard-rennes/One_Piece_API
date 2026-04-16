import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PersonnageMock } from 'src/app/models/PersonnageMock';
import { CommonModule } from '@angular/common';
import { MockPersoService } from 'src/app/services/mock-perso-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})

export class TestFormulaireComponent implements OnInit{

  personnageDBForm!: FormGroup;
  personnagePreview!: Observable<PersonnageMock>;
  personnageRegex!: RegExp;
  primeRegex!: RegExp;

  constructor(private formbuilder: FormBuilder,
              private mockPersoService : MockPersoService,
              private router : Router
  ) { }

ngOnInit(): void {
  this.personnageRegex = /[a-zA-Z0-9_:-]{100}/;
  this.primeRegex=/^[0-9]{4,6}$/;
  this.personnageDBForm = this.formbuilder.group({
    nom:[null, Validators.required],
    prenom:[null, Validators.required],
    surnom:[''],
    particule:[null],
    prime:[null, [Validators.required]],
    groupes:[null, Validators.required]
  }, {
updateOn: 'blur'

  });
  this.personnagePreview = this.personnageDBForm.valueChanges.pipe(
    map(formValue => ({
      ...formValue,
      id:0,
    }))
  );
}

onSubmitForm(): void{
  this.mockPersoService.addPersonnageMock(this.personnageDBForm.value);
  this.router.navigateByUrl('listePersonnages');
}

}
