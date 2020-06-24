import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { ProjectionComponent } from './projection/projection.component';
import { ExpanderComponent } from './expander/expander.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ProjectionComponent,
    ExpanderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
