import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreShowcaseMdComponent } from './theatre-showcase-md.component';

describe('TheatreShowcaseMdComponent', () => {
  let component: TheatreShowcaseMdComponent;
  let fixture: ComponentFixture<TheatreShowcaseMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreShowcaseMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreShowcaseMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
