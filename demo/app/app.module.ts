import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoaderModule } from '../../src/app/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoaderModule.forRoot({
      root: './assets/js/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

