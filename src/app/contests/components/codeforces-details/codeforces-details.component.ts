import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CodeforcesService } from '../../services/codeforces.service';

@Component({
  selector: 'app-codeforces-details',
  templateUrl: './codeforces-details.component.html',
  styleUrls: ['./codeforces-details.component.css']
})
export class CodeforcesDetailsComponent implements OnInit {
  handle: string = '';
  currentRating: number = 0;
  maxRating: number = 0;
  contestsParticipated: number = 0;
  problemSolved: number = 0;
  unsubscribe: any; //Subscription
  showSubmissionDetails: boolean = false;
  isLoading:boolean = false;

  constructor(private codeforcesService: CodeforcesService) { }

  ngOnInit(): void {
    this.profileDate();
  }

  profileDate(){
    this.isLoading = true;
    this.codeforcesService.calculateProfileInfo();
    setTimeout(() => {
      let profileData = this.codeforcesService.getProfileData();
      this.handle = profileData.userHandle;
      this.currentRating = profileData.rating;
      this.maxRating = profileData.maxRating;
      this.contestsParticipated = profileData.contestsParticipated;
      this.problemSolved = profileData.solvedProblems;
      this.isLoading = false;
    }, 2000);
  }

  submissionToggle(){
    this.showSubmissionDetails = !this.showSubmissionDetails;
  }
}
