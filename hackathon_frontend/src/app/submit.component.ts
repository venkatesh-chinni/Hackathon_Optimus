import { HackathonService } from './hackathon.service';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { SubmitService } from './submit.service';


@Component({
    selector:'app-submit-form',
    templateUrl: './submit.component.html'
})


export class SubmitComponent{

    constructor(private _submitservice:SubmitService, public _hackathon:HackathonService){}
    score=this._hackathon.score;
    submit_data:any[];
    submitScore(name:string,email:string,location:string,ID:number,score:number){
        this._submitservice.submitform(name,email,location,ID,score);
        
    }
}