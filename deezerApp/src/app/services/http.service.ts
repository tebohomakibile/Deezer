import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from "../models/search";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

  httpOtions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': '*'})};

  getServerData(query: string): Observable<Search[]> {
    let serverQuery = this.apiUrl + 'search?q=' + query + '&output=json';
    return this.httpClient.get<Search[]>(serverQuery, this.httpOtions);
  }

  // getServerData2() {
  //   let query = "eminem";
  //   let serverData;
  //   let serverQuery = this.apiUrl + 'search?q=' + query + '&output=json';
  //   this.httpClient.get(serverQuery, this.httpOtions).subscribe( data => {
  //     var parsed_data: any = JSON.parse(JSON.stringify(data));
  //     serverData = parsed_data.data;
  //     console.log(serverData);
  //   })
    
  // }

  getServerData3() {
    let query = "eminem";
    let serverQuery = this.apiUrl + 'search?q=' + query + '&output=json';
    return this.httpClient.get(serverQuery, this.httpOtions);
  }

}
