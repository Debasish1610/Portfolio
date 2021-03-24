import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ContactComponent } from './contact/contact.component';
import { ContestsComponent } from './contests/contests.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component: AboutComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: 'contests', component: ContestsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  // {path: '**', redirectTo: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
