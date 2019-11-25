import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }


  ngOnInit() {
    this.http.getServerData('justin bieber');  
  }


  goToDetail(data) {
    console.log(data);

    this.router.navigate(['detail'], {state: {data}});
  }


}
