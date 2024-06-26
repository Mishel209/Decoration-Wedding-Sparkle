import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UslugeComponent } from './usluge/usluge.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { CvjeticiKicankeSlikeComponent } from './cvjetici-kicanke-slike/cvjetici-kicanke-slike.component';
import { CvjetniAranzmaniSlikeComponent } from './cvjetni-aranzmani-slike/cvjetni-aranzmani-slike.component';
import { KutijaZaNovacSlikeComponent } from './kutija-za-novac-slike/kutija-za-novac-slike.component';
import { MladenackiStoSlikeComponent } from './mladenacki-sto-slike/mladenacki-sto-slike.component';
import { PozadinaZaSlikanjeSlikeComponent } from './pozadina-za-slikanje-slike/pozadina-za-slikanje-slike.component';
import { SpecijalniEfektiSlikeComponent } from './specijalni-efekti-slike/specijalni-efekti-slike.component';
import { TablaDobrodosliceSlikeComponent } from './tabla-dobrodoslice-slike/tabla-dobrodoslice-slike.component';
import { ZahvalnicePrsklaiceSlikeComponent } from './zahvalnice-prsklaice-slike/zahvalnice-prsklaice-slike.component';
import { CvjeticiKicankeTextComponent } from './cvjetici-kicanke-text/cvjetici-kicanke-text.component';
import { CvjetniAranzmaniTextComponent } from './cvjetni-aranzmani-text/cvjetni-aranzmani-text.component';
import { KutijaZaNovacTextComponent } from './kutija-za-novac-text/kutija-za-novac-text.component';
import { MladenackiStoTextComponent } from './mladenacki-sto-text/mladenacki-sto-text.component';
import { SpecijalniEfektiTextComponent } from './specijalni-efekti-text/specijalni-efekti-text.component';
import { TablaDobrodosliceTextComponent } from './tabla-dobrodoslice-text/tabla-dobrodoslice-text.component';
import { ZahvalniceIPrskaliceTextComponent } from './zahvalnice-i-prskalice-text/zahvalnice-i-prskalice-text.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'usluge', component: UslugeComponent},
  {path: 'galerija', component: GalerijaComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'cvjetici', component: CvjeticiKicankeSlikeComponent},
  {path: 'cvjetni', component: CvjetniAranzmaniSlikeComponent},
  {path: 'kutija', component:  KutijaZaNovacSlikeComponent},
  {path: 'mladenacki-sto', component: MladenackiStoSlikeComponent},
  {path: 'pozadina', component: PozadinaZaSlikanjeSlikeComponent},
  {path: 'efekti', component: SpecijalniEfektiSlikeComponent},
  {path: 'tabla', component: TablaDobrodosliceSlikeComponent},
  {path: 'zahvalnice', component: ZahvalnicePrsklaiceSlikeComponent},

  {path: 'cvjetici-text', component: CvjeticiKicankeTextComponent},
  {path: 'cvjetni-text', component: CvjetniAranzmaniTextComponent},
  {path: 'kutija-text', component: KutijaZaNovacTextComponent},
  {path: 'mladenacki-sto-text', component: MladenackiStoTextComponent},
  {path: 'efekti-text', component: SpecijalniEfektiTextComponent},
  {path: 'tabla-text', component: TablaDobrodosliceTextComponent},
  {path: 'zahvalnice-text', component: ZahvalniceIPrskaliceTextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
