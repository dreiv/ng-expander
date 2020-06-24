import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html'
})
export class ClockComponent implements OnInit {
  currentTime: string;

  ngOnInit(): void {
    const date = new Date();
    this.currentTime = `${date.getHours()}:${date.getMinutes()}`;
  }
}
