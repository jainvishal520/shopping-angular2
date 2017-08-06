import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // use as tag inside html
  // selector: '.app-servers',// use as a class
  // selector: '[app-servers]', // use as attribute in html
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addMoreServers = false;
  serverCreationStatus = 'No server was created!!!';
  serverName = 'test name';

  constructor() {
    setTimeout(() => {
      this.addMoreServers = true;
    },2000 );
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = `Server was created.Server name is ${this.serverName}`;
  }
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
