import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SubmissionDataModel } from '../../models/submission-data.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CodeforcesService } from '../../services/codeforces.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-codeforces-submission-details',
  templateUrl: './codeforces-submission-details.component.html',
  styleUrls: ['./codeforces-submission-details.component.css']
})
export class CodeforcesSubmissionDetailsComponent implements OnInit, OnDestroy {

  subscription: any; //Subscription;
  numberOfSolvedProblem: number = 0;
  isLoading: boolean = false; 
  dataSource: any;
  dataList: SubmissionDataModel[] = [];
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

  constructor(private codeforcesService: CodeforcesService) {}

  ngOnInit(): void {
    this.getSubmissionDetails();
  }

  getSubmissionDetails(){
    this.isLoading = true;
    this.codeforcesService.calculateSubmissionDetailsData();
    this.subscription = this.codeforcesService.submissionSubject.subscribe( (submissionDataList) => {
      this.dataList = submissionDataList;
      this.dataSource = new MatTableDataSource(this.dataList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
