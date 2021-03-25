import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://ng-complete-guide-9eaac-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) { }

  storeMessageToDatabase(message: any){
    this.http.post(this.url, message).subscribe(response =>{
      console.log(response);
    });
  }
}
