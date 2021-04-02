import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmissionDataModel } from '../models/submission-data.model';
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  submissionDataList: SubmissionDataModel[] = [];

  constructor(private http: HttpClient) {}

  fetchDataFromCodeforces(url: string) {
    return this.http.get(url);
  }

  getSubmissionDataList() {
    return this.submissionDataList;
  }
}
