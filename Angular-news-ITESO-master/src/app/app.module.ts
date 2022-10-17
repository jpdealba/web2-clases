import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from "./modules/material/material.module";
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './pages/notFound/error/error.component';
import { NoticiaDetailsPageComponent } from './pages/noticias/noticia-details-page/noticia-details-page.component';
import { NoticiaDetailsComponent } from './pages/noticias/noticia-details/noticia-details.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { MyUpperCasePipe } from './shared/pipes/my-upper-case.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    HomeComponent,
    NotFoundComponent,
    ErrorComponent,
    MyUpperCasePipe,
    NoticiaDetailsComponent,
    NoticiaDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
