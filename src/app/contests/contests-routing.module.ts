import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestsComponent } from './components/contests-default/contests.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

const routes: Routes = [
  { path: '', 
    component: ContestsComponent 
  },
  {
    path: 'profile',
    component: ProfileDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestsRoutingModule {}
