import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeforcesDetailsComponent } from './codeforces-details.component';

describe('CodeforcesDetailsComponent', () => {
  let component: CodeforcesDetailsComponent;
  let fixture: ComponentFixture<CodeforcesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeforcesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeforcesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
