import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { TestComponent } from './test/test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginguardComponent } from './loginguard/loginguard.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { CssattrPipe } from './cssattr.pipe';
import { AnnonceVueSynthetiqueComponent } from './annonce-vue-synthetique/annonce-vue-synthetique.component';
import { FooterComponent } from './footer/footer.component';
import { EvaluationAdvertiserComponent } from './evaluation-advertiser/evaluation-advertiser.component';
import { EvaluationApplicantComponent } from './evaluation-applicant/evaluation-applicant.component';
import { ContactComponent } from './contact/contact.component';
import { MesannoncesComponent } from './mesannonces/mesannonces.component';
import { AnnonceVueSynthetiqueSupprimerComponent } from './annonce-vue-synthetique-supprimer/annonce-vue-synthetique-supprimer.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { FilterPipe } from './filter.pipe';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { ProfilAnnouncerComponent } from './profil-announcer/profil-announcer.component';
import { ViewAnnoncComponent } from './view-annonc/view-annonc.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NotfoundComponent,
    CreateaccountComponent,
    TestComponent,
    AccueilComponent,
    LoginguardComponent,
    AnnonceComponent,
    MyaccountComponent,
    CssattrPipe,
    AnnonceVueSynthetiqueComponent,
    FooterComponent,
    EvaluationAdvertiserComponent,
    EvaluationApplicantComponent,
    ContactComponent,
    MesannoncesComponent,
    AnnonceVueSynthetiqueSupprimerComponent,
    DetailAnnonceComponent,
    FilterPipe,
    MesdemandesComponent,
    ProfilAnnouncerComponent,
    ViewAnnoncComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
