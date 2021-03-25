import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: AboutComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'achievement', component: AchievementComponent},
  { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'contests', loadChildren: () => import('./contests/contests.module').then(m => m.ContestsModule) },
  // {path: '**', redirectTo: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
