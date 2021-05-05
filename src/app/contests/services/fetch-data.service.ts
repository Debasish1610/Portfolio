import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {

  constructor(private http: HttpClient) {}

  fetchDataFromCodeforces(url: string) {
    return this.http.get(url);
  }
}
