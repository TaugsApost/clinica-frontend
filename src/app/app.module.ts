import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstruturaModule } from './estrutura/estrutura.module';
import { HttpErrorInterceptor } from './utils/interceptador/interceptador';
import { LoaderInterceptador } from './utils/interceptador/loader-interceptador';
import { LoaderModule } from './utils/loader/loader.module';
import { MensagensModule } from './utils/mensagens/mensagens.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MensagensModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    EstruturaModule,
    LoaderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptador,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
