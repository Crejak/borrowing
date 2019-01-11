import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { NotfoundComponent } from '../app/notfound/notfound.component';
import { CreateaccountComponent } from '../app/createaccount/createaccount.component';
import { TestComponent } from '../app/test/test.component';
import { AccueilComponent } from '../app/accueil/accueil.component';
import { AnnonceComponent} from './annonce/annonce.component';
import { MyaccountComponent } from '../app/myaccount/myaccount.component';
import { EvaluationAdvertiserComponent} from './evaluation-advertiser/evaluation-advertiser.component';
import { EvaluationApplicantComponent} from './evaluation-applicant/evaluation-applicant.component';
import { ContactComponent } from './contact/contact.component';
import { MesannoncesComponent } from './mesannonces/mesannonces.component';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { DetailAnnonceComponent } from '../app/detail-annonce/detail-annonce.component';
import { ProfilAnnouncerComponent } from './profil-announcer/profil-announcer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login/1', pathMatch: 'full' },
  { path: 'login', redirectTo: '/login/1', pathMatch: 'full' },
  { path: 'login/:id', component: LoginComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'accueil', redirectTo: '/accueil/1', pathMatch: 'full' },
  { path: 'accueil/:id', component: AccueilComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'test', component: TestComponent },
  { path: 'createad', component: AnnonceComponent },
  { path: 'evalapplicant', component: EvaluationApplicantComponent},
  { path: 'evaladvertiser', component: EvaluationAdvertiserComponent },
  { path: 'contact/:id', component: ContactComponent},
  { path: 'myannounces', component: MesannoncesComponent },
  { path: 'mydemandes', component: MesdemandesComponent },
  { path: 'profile/:id', component: ProfilAnnouncerComponent },
  { path: 'detailannonce', component: DetailAnnonceComponent },
  { path: 'detailannonce/:id', component: DetailAnnonceComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
