import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ContactComponent } from './contact/contact.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RessourcesComponent,
    ContactComponent,
    PageNonTrouveeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
