import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.addJaMsg('ja');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
