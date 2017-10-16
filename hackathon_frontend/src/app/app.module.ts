import { SubmitComponent } from './submit.component';
import { HackathonService } from './hackathon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubmitService } from "./submit.service";
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HackathonService,SubmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
