import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ContestSitesDataService } from '../../services/contest-sites-data.service';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent implements OnInit {
  activated = false;
  solveProblem = [];
  sitesData:any = [];

  constructor(private contesSitesData: ContestSitesDataService) { } 

  ngOnInit(): void {
    // forkJoin()

    this.sitesData = this.contesSitesData.getSitesData();

  }

}
