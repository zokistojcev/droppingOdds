import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllOddsComponent } from './show-all-odds.component';

describe('ShowAllOddsComponent', () => {
  let component: ShowAllOddsComponent;
  let fixture: ComponentFixture<ShowAllOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
