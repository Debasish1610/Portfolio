import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { SubmissionDataModel } from '../../models/submission-data.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  submissionDataList: SubmissionDataModel[] = [];
  isLoading: boolean = false;
  dataSource: any;
  url: string =
    'https://codeforces.com/api/user.status?handle=debasish1610177113';
  columns: string[] = [
    'submissionId',
    'rating',
    'problemName',
    'language',
    'verdict',
    'time',
    'memory',
  ];
  @ViewChild(MatPaginator) paginator: any; 
  @ViewChild(MatSort) sort: any;

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchDataService
      .fetchDataFromCodeforces(this.url)
      .subscribe((responseData: any) => {
        console.log(responseData);
        let dataList: SubmissionDataModel[] = [];
        for (let i = 0; i < responseData.result.length; i++) {
          let verdict: string = '';
          if(responseData.result[i].verdict === "OK"){
            verdict = "Accepted";
          }
          else if(responseData.result[i].verdict === "TIME_LIMIT_EXCEEDED"){
            verdict = "Time limit exceeded";
          }
          else if(responseData.result[i].verdict === "MEMORY_LIMIT_EXCEEDED"){
            verdict = "Memory limit exceeded";
          }
          else {
            verdict = "Wrong answer";
          }
          dataList.push({
            submissionId: responseData.result[i].id,
            rating: responseData.result[i].problem.rating,
            problemName: responseData.result[i].problem.name,
            language: responseData.result[i].programmingLanguage,
            verdict: verdict,
            time: responseData.result[i].timeConsumedMillis,
            memory: responseData.result[i].memoryConsumedBytes,
            contestId: responseData.result[i].problem.contestId,
            index: responseData.result[i].problem.index
          });
        }
        this.isLoading = false;
        this.submissionDataList = dataList;
        this.dataSource = new MatTableDataSource(this.submissionDataList); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}
