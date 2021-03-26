import { Injectable } from "@angular/core";

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() {}

  start(ms: number, f: number) {
    this.counter = 0;
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
        if (this.counter >= f) this.stop();
        return this.counter;
      }, ms);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  getCount() {
    return this.counter;
  }

  clear() {
    this.stop();
    return (this.counter = 0);
  }
}
