import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Injectable()
export class HackathonService {

  constructor() { }

  sub: Subscription;
  public count = 0;
  public change: Boolean = false;
  public finish: Boolean = true;
  public ticks = 0;
  public minutesDisplay = 0;
  public hoursDisplay = 0;
  public secondsDisplay = 0;
  public scores = 0;
  colors;
  shuffle(array: any): void {
    if (this.finish) {
      let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

     // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;


    }
    console.log(array);
    return array; }
  }

  onClickTimer() {
      if ((this.count) ===  0) { this.startTimer(); }

     (this.count)  = (this.count) + 1;
      console.log(this.count);
    }
  startTimer() {
      const timer = Observable.timer(1, 500);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;
              console.log(this.ticks);
              this.colors = this.shuffle(['white', 'red', 'green', 'blue']);
              if ((this.ticks) <= 120) {
                this.secondsDisplay = Math.round(this.getSeconds(this.ticks) / 2);
                console.log(this.secondsDisplay);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
              // tslint:disable-next-line:one-line
              } else{
                this.finish = false;
                console.log(this.finish);
                this.change = true;
                this.sub.unsubscribe();
              }
          }
      );
  }

  private getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
       return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
      return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) {
      return digit <= 9 ? '0' + digit : digit;
  }

}