import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/services/gifs.module';
import { SharedModule } from './shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient,withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    
    SharedModule
  ],
  providers: [
    provideClientHydration(),provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
