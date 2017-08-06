import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // use as tag inside html
  // selector: '.app-servers',// use as a class
  // selector: '[app-servers]', // use as attribute in html
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    .white{
      color:#fff;
    }
  `]
})
export class ServersComponent implements OnInit {
  addMoreServers = false;
  serverCreationStatus = 'No server was created!!!';
  serverName = 'test name';
  serverStatus = false;
  servers= ['testserver1', 'testserver2'];
  displaySecret = false;
  clickStats = [];
  i = 0;
  // username: '';

  constructor() {
    setTimeout(() => {
      this.addMoreServers = true;
    },2000 );
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverStatus = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created.Server name is ${this.serverName}`;
  }
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onDisplaySecret(){
    this.i = this.i + 1;
    this.displaySecret = !this.displaySecret;
    // this.clickStats.push(this.i);
    this.clickStats.push(new Date());
  }
  get_blue_color(){
    return this.i > 5 ? 'blue' : 'transparent';
  }
  // onResetUsername() {
  //   this.username = '';
  // }
}
