import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for error in input-form.component.html

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Add FormsModule here to have it working correctly
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
