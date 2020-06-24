import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html'
})
export class ClockComponent implements OnInit, OnDestroy {
  currentTime: string;

  ngOnInit(): void {
    const date = new Date();
    this.currentTime = `${date.getHours()}:${date.getMinutes()}`;

    console.log('ClockComponent: ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('ClockComponent: ngOnDestroy called');
  }
}
