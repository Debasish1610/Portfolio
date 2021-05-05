import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeforcesDetailsComponent } from './components/codeforces-details/codeforces-details.component';
import { ContestsComponent } from './components/contests-default/contests.component';

const routes: Routes = [
  { path: '', component: ContestsComponent },
  {
    path: 'profile/cf',
    component: CodeforcesDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestsRoutingModule {}
