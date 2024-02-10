import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSummaryComponent } from './email-summary.component';

describe('EmailSummaryComponent', () => {
  let component: EmailSummaryComponent;
  let fixture: ComponentFixture<EmailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
