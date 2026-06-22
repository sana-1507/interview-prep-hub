import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  timer = 0;
  isTimerRunning = false;
  subscription: Subscription | undefined;
  startTime = Date.now();
  isTimerPaused = false;

  start() {
    if(this.isTimerRunning) {
      return;
    }
    this.startTime = Date.now();
    this.isTimerRunning = true;
    this.subscription = interval(1000).subscribe((time) => {
      if (this.isTimerRunning) {
        this.timer = Math.floor(
          (Date.now() - this.startTime) / 1000);
      }
    });
  }

  pause() {
    this.isTimerRunning = false;
    this.subscription?.unsubscribe();
  }

  reset() {
    this.timer = 0;
    this.isTimerRunning = false;
    this.subscription?.unsubscribe();
  }

  resume() {
    if(this.isTimerRunning) {
      return;
    }
    this.isTimerRunning = true;
  this.startTime =
    Date.now() - this.timer * 1000;

  this.subscription = interval(1000)
    .subscribe(() => {
      this.timer = Math.floor(
        (Date.now() - this.startTime) / 1000
      );
    });
}

getFormattedTime() {
  const hours = Math.floor(this.timer / 3600);
  const minutes = Math.floor((this.timer % 3600) / 60);
  const seconds = this.timer % 60;      
   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(1, '0')}`;
}
  

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
