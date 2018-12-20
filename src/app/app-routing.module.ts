import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { NotfoundComponent } from '../app/notfound/notfound.component';
import { CreateaccountComponent } from '../app/createaccount/createaccount.component';
import { TestComponent } from '../app/test/test.component';
import { AccueilComponent } from '../app/accueil/accueil.component';
import { AnnonceComponent} from './annonce/annonce.component';
import { MyaccountComponent } from '../app/myaccount/myaccount.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'test', component: TestComponent },
  { path: 'createad', component: AnnonceComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
