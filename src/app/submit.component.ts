import { Component } from '@angular/core';
import { SubmitService } from './submit.service';



@Component({
    selector:'app-submit-form',
    templateUrl: './submit.component.html'
})


export class SubmitComponent{

    constructor(private _submitservice:SubmitService){}
    submitScore(name:string,email:string,location:string,ID:string){
        
    }
}