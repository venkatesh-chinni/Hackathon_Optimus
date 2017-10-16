import { Component, Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class SubmitService{
    constructor(public http: Http){}
     public baseUrl='http://localhost:5000/api/hackathon';
        submitform(name:string,email:string,location:string,id:number,score:number){
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=utf-8');
            console.log(score);
            this.http.post(this.baseUrl, JSON.stringify({name:name,email:email,location:location,id:id,score:score}), { headers: headers }).subscribe();
        }



}