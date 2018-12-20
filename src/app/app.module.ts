import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
