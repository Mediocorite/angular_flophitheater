import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCurtainComponent } from './landing-curtain.component';

describe('LandingCurtainComponent', () => {
  let component: LandingCurtainComponent;
  let fixture: ComponentFixture<LandingCurtainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingCurtainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCurtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
