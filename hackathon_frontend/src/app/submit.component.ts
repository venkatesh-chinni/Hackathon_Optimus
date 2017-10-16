import { HackathonService } from './hackathon.service';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { SubmitService } from './submit.service';


@Component({
    selector:'app-submit-form',
    templateUrl: './submit.component.html'
})


export class SubmitComponent{

    constructor(private _submitservice:SubmitService,public _hackathon:HackathonService){}
    mark : number;
    ngOnIt(){ this.mark=this._hackathon.scores;
        console.log(this.mark);}
    submit_data:any[];
    submitScore(name:string,email:string,location:string,ID:number){
        this._submitservice.submitform(name,email,location,ID,this._hackathon.scores);
        
    }
}