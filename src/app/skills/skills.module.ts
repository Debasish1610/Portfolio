import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './components/skills-default/skills.component';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    // MaterialModule
  ]
})
export class SkillsModule { }   
