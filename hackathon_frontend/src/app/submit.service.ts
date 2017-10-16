import { Component, Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class SubmitService{
    constructor(public http: Http){}
     public baseUrl='localhost:5000/';
        submitform(name:string,email:string,location:string,id:number,score:number){
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=utf-8');
            this.http.post(this.baseUrl+'api/hackathon', JSON.stringify({}), { headers: headers }).subscribe();

        }



}