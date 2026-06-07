import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.html',
  styleUrl: './timer.css'
})
export class TimerComponent implements OnInit, OnDestroy {
  seconds: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    console.log('timer created');
    this.intervalId = setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }

  ngOnDestroy(): void {
    // console.log('el timer mat');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
