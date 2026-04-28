import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { MainComponent } from './template/main/main.component';
import { FooterComponent } from './template/footer/footer.component';
import { AccueilComponent } from './template/accueil/accueil.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({ declarations: [],
    bootstrap: [], imports: [
        AppComponent,
        MainComponent,
        FooterComponent,
        AccueilComponent,
        AppComponent,
        HeaderComponent,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
