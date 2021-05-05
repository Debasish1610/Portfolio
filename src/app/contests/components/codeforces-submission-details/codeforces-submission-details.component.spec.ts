import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeforcesSubmissionDetailsComponent } from './codeforces-submission-details.component';

describe('CodeforcesSubmissionDetailsComponent', () => {
  let component: CodeforcesSubmissionDetailsComponent;
  let fixture: ComponentFixture<CodeforcesSubmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeforcesSubmissionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeforcesSubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
