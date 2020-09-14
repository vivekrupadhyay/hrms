import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnChanges {
  @Input() isLoading: boolean;
  @Input() hideContent = true;
  public spinning: boolean;
  private timer = null;
  private msToDelay = 500;
  private minimumMsToSpin = 2000;
  private interval = null;
  private msSinceSpinningStart = null;
  constructor() {}

  ngOnChanges(): void {
    clearTimeout(this.timer);
    if (this.isLoading) {
      this.startTimer();
      this.startDelay();
    }
    if (!this.isLoading) {
      this.stopSpinner();
    }
  }
  private startSpinner(): void {
    this.spinning = true;
  }
  private stopSpinner(): void {
    if (this.spinning && this.msSinceSpinningStart > this.minimumMsToSpin) {
      this.spinning = false;
      clearTimeout(this.timer);
      clearInterval(this.interval);
    }
    if (this.spinning && this.msSinceSpinningStart < this.minimumMsToSpin) {
      setTimeout(() => {
        this.stopSpinner();
      }, 200);
    }
    if (!this.spinning) {
      clearTimeout(this.timer);
      clearInterval(this.interval);
    }
  }
  private startTimer(): void {
    const start = Date.now();
    this.interval = setInterval(() => {
      this.msSinceSpinningStart = Date.now() - start;
    }, 100);
  }
  private startDelay(): void {
    this.timer = setTimeout(() => {
      this.startSpinner();
    }, this.msToDelay);
  }
}
