import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './template/landing-page/landing-page.component';
import { ListPersonnagesApiComponent } from './template/list-personnages-api/list-personnages-api.component';
import { FichePersonnageApiComponent } from './template/fiche-personnage-api/fiche-personnage-api.component';
import { FicheGroupeApiComponent } from './template/fiche-groupe-api/fiche-groupe-api.component';
import { JeuMotMelangeComponent } from './template/fichiers-jeu/jeu-mot-melange/jeu-mot-melange.component';
import { ListeGroupesComponent } from './template/list-groupes/list-groupes.component';
import { ListGroupesApiComponent } from './template/list-groupes-api/list-groupes-api.component';
import { FicheGroupeComponent } from './template/fiche-groupe/fiche-groupe.component';
import { ListPersonnagesComponent } from './template/list-personnages/list-personnages.component';
import { FichePersonnageComponent } from './template/fiche-personnage/fiche-personnage.component';
import { TestFormulaireComponent } from './template/test-formulaire/test-formulaire.component';
import { JeuReponseMotMelangeComponent } from './template/fichiers-jeu/jeu-reponse-mot-melange/jeu-reponse-mot-melange.component';
import { JeuEquipageComponent } from './template/fichiers-jeu/jeu-equipage/jeu-equipage.component';
import { JeuReponseComponent } from './template/fichiers-jeu/jeu-reponse/jeu-reponse.component';
import { ChoixJeuComponent } from './template/fichiers-jeu/choix-jeu/choix-jeu.component';


const routes: Routes = [
  { path: 'personnage/:id', component: FichePersonnageComponent },
  { path: 'groupe/:id', component: FicheGroupeComponent },
  { path: '', component: LandingPageComponent },
  { path: 'creer', component:TestFormulaireComponent},
  { path: 'choixJeu', component:ChoixJeuComponent},
  { path: 'jeu', component: ChoixJeuComponent},
  { path: 'jeuMelange', component: JeuMotMelangeComponent},
  { path: 'jeuEquipage', component: JeuEquipageComponent},
  { path: 'jeuReponse', component: JeuReponseComponent},
  { path: 'jeuReponseMelange', component: JeuReponseMotMelangeComponent},
  { path: 'listePersonnages', component: ListPersonnagesComponent },
  { path: 'listePersonnagesApi', component: ListPersonnagesApiComponent },
  { path: 'listeGroupes', component: ListeGroupesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

