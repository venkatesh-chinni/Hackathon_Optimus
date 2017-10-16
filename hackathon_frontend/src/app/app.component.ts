import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { HackathonService } from './hackathon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  sub: Subscription;
  constructor(private hackathon: HackathonService) {}
  colors = this.colors;
  public score=0;
  public ticks = 0;
  ngOnInit() {
    this.hackathon.colors = this.hackathon.shuffle(['white', 'red', 'green', 'blue']);
    console.log(this.colors);
  }
  onClick(color) {
    if (color === 'white' && this.hackathon.finish) {
      this.hackathon.scores++;
      this.score++;
    }
    console.log(this.hackathon.scores);
  }
}



