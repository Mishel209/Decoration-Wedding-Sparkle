import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UslugeComponent } from './usluge/usluge.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CvjeticiKicankeSlikeComponent } from './cvjetici-kicanke-slike/cvjetici-kicanke-slike.component';
import { CvjetniAranzmaniSlikeComponent } from './cvjetni-aranzmani-slike/cvjetni-aranzmani-slike.component';
import { KutijaZaNovacSlikeComponent } from './kutija-za-novac-slike/kutija-za-novac-slike.component';
import { MladenackiStoSlikeComponent } from './mladenacki-sto-slike/mladenacki-sto-slike.component';
import { PozadinaZaSlikanjeSlikeComponent } from './pozadina-za-slikanje-slike/pozadina-za-slikanje-slike.component';
import { SpecijalniEfektiSlikeComponent } from './specijalni-efekti-slike/specijalni-efekti-slike.component';
import { TablaDobrodosliceSlikeComponent } from './tabla-dobrodoslice-slike/tabla-dobrodoslice-slike.component';
import { ZahvalnicePrsklaiceSlikeComponent } from './zahvalnice-prsklaice-slike/zahvalnice-prsklaice-slike.component';
import { CvjetniAranzmaniTextComponent } from './cvjetni-aranzmani-text/cvjetni-aranzmani-text.component';
import { MladenackiStoTextComponent } from './mladenacki-sto-text/mladenacki-sto-text.component';
import { TablaDobrodosliceTextComponent } from './tabla-dobrodoslice-text/tabla-dobrodoslice-text.component';
import { KutijaZaNovacTextComponent } from './kutija-za-novac-text/kutija-za-novac-text.component';
import { SpecijalniEfektiTextComponent } from './specijalni-efekti-text/specijalni-efekti-text.component';
import { ZahvalniceIPrskaliceTextComponent } from './zahvalnice-i-prskalice-text/zahvalnice-i-prskalice-text.component';
import { CvjeticiKicankeTextComponent } from './cvjetici-kicanke-text/cvjetici-kicanke-text.component';
import { PozadineZaSlikanjeComponent } from './pozadine-za-slikanje/pozadine-za-slikanje.component';
import { InstagramLinkComponent } from './instagram-link/instagram-link.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DropdownLanguageComponent } from './dropdown-language/dropdown-language.component';
import { GalleryComponent } from '../assets/gallery/gallery.component';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UslugeComponent,
    GalerijaComponent,
    KontaktComponent,
    FooterComponent,
    CvjeticiKicankeSlikeComponent,
    CvjetniAranzmaniSlikeComponent,
    KutijaZaNovacSlikeComponent,
    MladenackiStoSlikeComponent,
    PozadinaZaSlikanjeSlikeComponent,
    SpecijalniEfektiSlikeComponent,
    TablaDobrodosliceSlikeComponent,
    ZahvalnicePrsklaiceSlikeComponent,
    CvjetniAranzmaniTextComponent,
    MladenackiStoTextComponent,
    TablaDobrodosliceTextComponent,
    KutijaZaNovacTextComponent,
    SpecijalniEfektiTextComponent,
    ZahvalniceIPrskaliceTextComponent,
    CvjeticiKicankeTextComponent,
    PozadineZaSlikanjeComponent,
    InstagramLinkComponent,
    DropdownLanguageComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
