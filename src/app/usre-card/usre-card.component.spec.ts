import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsreCardComponent } from './usre-card.component';

describe('UsreCardComponent', () => {
  let component: UsreCardComponent;
  let fixture: ComponentFixture<UsreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
