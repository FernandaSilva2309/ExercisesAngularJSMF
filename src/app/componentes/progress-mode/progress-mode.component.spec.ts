import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressModeComponent } from './progress-mode.component';

describe('ProgressModeComponent', () => {
  let component: ProgressModeComponent;
  let fixture: ComponentFixture<ProgressModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
