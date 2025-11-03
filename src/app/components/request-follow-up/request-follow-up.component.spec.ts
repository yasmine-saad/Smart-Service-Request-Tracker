import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFollowUpComponent } from './request-follow-up.component';

describe('RequestFollowUpComponent', () => {
  let component: RequestFollowUpComponent;
  let fixture: ComponentFixture<RequestFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestFollowUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
