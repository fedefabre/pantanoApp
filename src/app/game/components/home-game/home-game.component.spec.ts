import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGameComponent } from './home-game.component';

describe('HomeGameComponent', () => {
  let component: HomeGameComponent;
  let fixture: ComponentFixture<HomeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
