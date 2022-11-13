import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  isVisible: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  changeTrigger(listValue: any) {
    this.isVisible = listValue;
  }


  logOut(){
      this.router.navigate(['login']);
      localStorage.removeItem('isloggedIn')
  }

}
