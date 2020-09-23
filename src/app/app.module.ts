import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { AccordionComponent } from './accordion/accordion.component';

// @NgModule({
//   imports:      [ BrowserModule, FormsModule ],
//   declarations: [ AppComponent, AccordionComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
