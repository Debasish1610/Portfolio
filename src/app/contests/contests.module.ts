import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestsComponent } from './components/contests-default/contests.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [ContestsComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ContestsModule { }
