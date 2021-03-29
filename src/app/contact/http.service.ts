import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://portfolio-ced40-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) { }

  storeMessageToDatabase(message: any){
    message = {}
    this.http.post(this.url, {title: 'title', content: 'content'}).subscribe(response =>{
      console.log(response);
    });
  }
}
