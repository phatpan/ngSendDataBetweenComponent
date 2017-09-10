import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCalComponent } from './action-cal.component';

describe('ActionCalComponent', () => {
  let component: ActionCalComponent;
  let fixture: ComponentFixture<ActionCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
