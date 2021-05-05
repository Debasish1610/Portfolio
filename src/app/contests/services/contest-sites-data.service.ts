import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContestSitesDataService {
  sitesData = [
    {
      name: 'CodeChef',
      imageLink: '../../../assets/img/codechef.logo.png',
      route: '',
    },
    {
      name: 'LightOJ',
      imageLink: '../../../assets/img/loj-og-image.png',
      route: '',
    },
    {
      name: 'HackerRank',
      imageLink: '../../../assets/img/hackerrank-logo.jpg',
      route: '',
    },
    {
      name: 'Codeforces',
      imageLink: '../../../assets/img/codeforces_logo.png',
      route: 'profile/cf',
    },
  ];

  getSitesData() {
    return this.sitesData;
  }
}
