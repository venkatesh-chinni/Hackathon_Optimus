import { DisplayComponent } from './display.component';
import { SubmitComponent } from './submit.component';
import { HackathonService } from './hackathon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubmitService } from "./submit.service";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'display',component:DisplayComponent}
    ])
  ],
  providers: [HackathonService,SubmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
