import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import { CompanyModule } from "./company/company.module";

import { AppRoutingModule } from "./app-routing.module";
//import { PersonModule } from "./person/person.module";
import { AppComponent } from "./app.component";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [AppComponent, PageNotfoundComponent, ContactComponent],
  imports: [
    //CompanyModule,
     //PersonModule, 
     
     BrowserModule, AppRoutingModule],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App module loaded");
  }
}
