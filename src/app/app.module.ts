import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { NomDynamiqueComponent } from './nom-dynamique/nom-dynamique.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylesComponent } from './styles/styles.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormulaireArrayComponent } from './formulaire-array/formulaire-array.component';
import { ListeArticlePage } from './article/pages/liste-article/liste-article.page';
import { DetailArticleComponent } from './article/components/detail-article/detail-article.component';
import { CreerArticleComponent } from './article/creer-article/creer-article.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    NomDynamiqueComponent,
    StylesComponent,
    FormulaireComponent,
    FormulaireArrayComponent,
    ListeArticlePage,
    DetailArticleComponent,
    CreerArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
