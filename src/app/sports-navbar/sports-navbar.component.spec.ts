import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsNavbarComponent } from './sports-navbar.component';

describe('SportsNavbarComponent', () => {
  let component: SportsNavbarComponent;
  let fixture: ComponentFixture<SportsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
