import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { CoursComponent } from './cours/cours.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { RessourcesComponent } from './ressources/ressources.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path :'cours',
loadChildren:()=>import ('./cours/cours.module').then(cours=>cours.CoursModule)},
  {path:'ressources',component:RessourcesComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PageNonTrouveeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
