import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './template/landing-page/landing-page.component';
import { ListPersonnagesApiComponent } from './template/list-personnages-api/list-personnages-api.component';
import { JeuMotMelangeComponent } from './template/fichiers-jeu/jeu-mot-melange/jeu-mot-melange.component';
import { ListeGroupesComponent } from './template/list-groupes/list-groupes.component';
import { FicheGroupeComponent } from './template/fiche-groupe/fiche-groupe.component';
import { ListPersonnagesComponent } from './template/list-personnages/list-personnages.component';
import { FichePersonnageComponent } from './template/fiche-personnage/fiche-personnage.component';
import { TestFormulaireComponent } from './template/test-formulaire/test-formulaire.component';
import { JeuEquipageComponent } from './template/fichiers-jeu/jeu-equipage/jeu-equipage.component';
import { JeuReponseComponent } from './template/fichiers-jeu/jeu-reponse/jeu-reponse.component';
import { JeuAgeComponent } from './template/fichiers-jeu/jeu-age/jeu-age.component';
import { ChoixJeuComponent } from './template/fichiers-jeu/choix-jeu/choix-jeu.component';
import { AuthGuard } from 'src/auth.guard';
import { LoginComponent } from './template/login/login.component';


const routes: Routes = [
  { path: 'personnage/:id', component: FichePersonnageComponent },
  { path: 'groupe/:id', component: FicheGroupeComponent },
  { path: '', component: LandingPageComponent },
  { path: 'login', component:LoginComponent},
  { path: 'choixJeu', component:ChoixJeuComponent},
  { path: 'jeu', component: ChoixJeuComponent},
  { path: 'jeuAge', component: JeuAgeComponent},
  { path: 'jeuMelange', component: JeuMotMelangeComponent},
  { path: 'jeuEquipage', component: JeuEquipageComponent},
  { path: 'jeuReponse', component: JeuReponseComponent},
  { path: 'listePersonnages', component: ListPersonnagesComponent },
  { path: 'listeGroupes', component: ListeGroupesComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      { path: 'listePersonnagesApi', component: ListPersonnagesApiComponent },
      { path: 'creer', component:TestFormulaireComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

