import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestsComponent } from './components/contests-default/contests.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CodeforcesDetailsComponent } from './components/codeforces-details/codeforces-details.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CodeforcesSubmissionDetailsComponent } from './components/codeforces-submission-details/codeforces-submission-details.component';
import { SpinLoaderComponent } from './components/spin-loader/spin-loader.component';

@NgModule({
  declarations: [ContestsComponent,CodeforcesDetailsComponent, CodeforcesSubmissionDetailsComponent, SpinLoaderComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule
  ],
})
export class ContestsModule {}
