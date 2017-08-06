import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color:#fff;
    }
  `]
})

export class ServerComponent{
  id: number = 10;
  status: String = 'online';
  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  get_status() {
    return this.status;
  }
  get_color() {
    return this.status === 'online' ? 'green' : 'red';
  }
}
