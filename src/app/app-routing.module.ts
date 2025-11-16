import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './template/landing-page/landing-page.component';
import { ListPersonnagesApiComponent } from './template/list-personnages-api/list-personnages-api.component';
import { FichePersonnageApiComponent } from './template/fiche-personnage-api/fiche-personnage-api.component';
import { FicheGroupeApiComponent } from './template/fiche-groupe-api/fiche-groupe-api.component';
import { JeuMotMelangeComponent } from './template/jeu-mot-melange/jeu-mot-melange.component';
import { ListeGroupesComponent } from './template/list-groupes/list-groupes.component';


const routes: Routes = [
  { path: 'personnage/:id', component: FichePersonnageApiComponent },
  { path: 'groupe/:id', component: FicheGroupeApiComponent },
  { path: '', component: LandingPageComponent },
   { path: 'jeu', component: JeuMotMelangeComponent},
   { path: 'listePersonnages', component: ListPersonnagesApiComponent },
   { path: 'listeGroupes', component: ListeGroupesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

