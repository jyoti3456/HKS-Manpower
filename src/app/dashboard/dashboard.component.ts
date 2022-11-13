import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public appService : AppServiceService,
    private router: Router,
    private ngZone: NgZone) {

     }

  ngOnInit(): void {

    

    // setTimeout(()=>{
    //   this.router.navigate(['login']);
    //   localStorage.removeItem('isloggedIn')
    // },172800)


  }


  async getUserList(flag : any) {
    
  }


  

}
