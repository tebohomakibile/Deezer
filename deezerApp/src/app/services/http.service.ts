import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serverData$;

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';


  getServerData (search: string) {
    let query = 'search?q=' + search + '&output=json';
    this.httpClient.get(this.apiUrl + query).subscribe(async (data: {data: any}) => {
      this.serverData$ = await data.data;
      console.log(this.serverData$);
    });
  }

}
