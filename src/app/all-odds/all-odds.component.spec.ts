import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOddsComponent } from './all-odds.component';

describe('AllOddsComponent', () => {
  let component: AllOddsComponent;
  let fixture: ComponentFixture<AllOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
