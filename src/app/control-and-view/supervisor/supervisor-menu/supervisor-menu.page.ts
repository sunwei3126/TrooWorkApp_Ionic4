import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-menu',
  templateUrl: './supervisor-menu.page.html',
  styleUrls: ['./supervisor-menu.page.scss'],
})
export class SupervisorMenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    
    {
      title: 'Supervisor DashBoard',//second
      url: '/supervisor-menu/super-visor-dash-board',
      icon: "home"
    },
    {
      title: ' View Inspection',//first
      url: '/supervisor-menu/inspection-supervisor-view',
      icon: "create"
    },
    {
      title: ' WorkOrder View',//first
      url: '/supervisor-menu/workorder-supervisor-view',
      icon: "logo-buffer"
    },
    {
      title: 'Scan For Work',//first
      url: '/supervisor-menu/scan-for-work-supervisor',
      icon: "barcode"
    } ,
    
    
    {
      title: 'Logout',
      url:  '/manager-menu/login',
      icon:"log-out"
    }
    
  ];
  loginDetalis;
  Username;
  constructor() { }
  url_base64_decode(str) {
    var output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw new Error('Illegal base64url string!');
    }
    return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
  }
  ngOnInit() {
    var token = localStorage.getItem('token');
    localStorage['token'] = token;
    var encodedProfile = token.split('.')[1];
    var profile = JSON.parse(this.url_base64_decode(encodedProfile));
  

    this.Username=profile.username;
  }

}
