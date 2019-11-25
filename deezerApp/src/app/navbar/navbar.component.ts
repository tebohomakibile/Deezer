import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchString: string;

  constructor(private http: HttpService) { }

  ngOnInit() {
  }


  search () {
    this.http.getServerData(this.searchString);
  }

}
