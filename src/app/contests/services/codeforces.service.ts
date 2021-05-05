import { Injectable } from '@angular/core';
import { SubmissionDataModel } from '../models/submission-data.model';
import { FetchDataService } from './fetch-data.service';
import { map, pluck } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeforcesService {
  public submissionSubject = new Subject<SubmissionDataModel[]>();
  public profileSubject = new Subject<any>();
  submissionDataList: SubmissionDataModel[] = [];
  solvedProblems: number = 0;
  contestsParticipated: number = 0;
  userHandle: string = '';
  rating: number = 0;
  maxRating: number = 0;
  userStatusUrl =
    'https://codeforces.com/api/user.status?handle=debasish1610177113';
  userRatingUrl =
    'http://codeforces.com/api/user.rating?handle=debasish1610177113';
  userInfoUrl =
    'http://codeforces.com/api/user.info?handles=debasish1610177113';
  constructor(private fetchDataService: FetchDataService) {}

  calculateSubmissionDetailsData() {
    this.fetchDataService
      .fetchDataFromCodeforces(this.userStatusUrl)
      .pipe(
        map((responseData: any) => {
          return responseData.result.map((submissionDetails: any) => {
            return {
              submissionId: submissionDetails.id,
              rating: submissionDetails.problem.rating,
              problemName: submissionDetails.problem.name,
              language: submissionDetails.programmingLanguage,
              verdict:
                submissionDetails.verdict === 'OK'
                  ? 'Accepted'
                  : submissionDetails.verdict === 'TIME_LIMIT_EXCEEDED'
                  ? 'Time limit exceeded'
                  : submissionDetails.verdict === 'MEMORY_LIMIT_EXCEEDED'
                  ? 'Memory limit exceeded'
                  : 'Wrong answer',
              time: submissionDetails.timeConsumedMillis,
              memory: submissionDetails.memoryConsumedBytes,
              contestId: submissionDetails.problem.contestId,
              index: submissionDetails.problem.index,
            };
          });
        })
      )
      .subscribe((submissionDataList: any) => {
        this.submissionDataList = submissionDataList;
        this.submissionSubject.next(submissionDataList);
      });
  }

  private countCodeforcesSolvedProblem() {
    this.calculateSubmissionDetailsData();
    this.submissionSubject.subscribe((submissionDataList) => {
      let solvedProblem = [];
      for (let submission of submissionDataList) {
        if (submission.verdict === 'Accepted') {
          solvedProblem.push(submission.contestId + submission.index);
        }
      }
      this.solvedProblems = new Set(solvedProblem).size;
    });
  }
  
  private countNumberOfContestParticipated() {
    this.fetchDataService
      .fetchDataFromCodeforces(this.userRatingUrl)
      .subscribe((userRating: any) => {
        this.contestsParticipated = userRating.result.length;
        console.log(this.contestsParticipated);
      });
  }

  private getUserInfo() {
    this.fetchDataService
      .fetchDataFromCodeforces(this.userInfoUrl)
      .pipe(pluck('result'))
      .subscribe((userInfo: any) => {
        this.userHandle = userInfo[0].handle;
        this.rating = userInfo[0].rating;
        this.maxRating = userInfo[0].maxRating;
      });
  }

  calculateProfileInfo() {
    this.getUserInfo();
    this.countCodeforcesSolvedProblem();
    this.countNumberOfContestParticipated();
  }

  getProfileData() {
    return {
      userHandle: this.userHandle,
      solvedProblems: this.solvedProblems,
      contestsParticipated: this.contestsParticipated,
      rating: this.rating,
      maxRating: this.maxRating,
    };
  }
}
