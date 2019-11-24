import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpService) { }

  serckKeywords: string = "";
  serverData: any[];

  ngOnInit() {

    this.http.getServerData3().subscribe( data => {
      var parsed_data = JSON.parse(JSON.stringify(data));
      this.serverData = parsed_data.data;
      console.log("This is the data", this.serverData);
    });

    // this.gitSvc.getProfile().subscribe(
    //   data => {
    //     this.profileValues = data;
    //   }
    // );
  }

}
