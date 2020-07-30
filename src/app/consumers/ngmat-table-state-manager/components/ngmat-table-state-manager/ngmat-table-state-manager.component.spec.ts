import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmatTableStateManagerComponent } from './ngmat-table-state-manager.component';

describe('NgmatTableStateManagerComponent', () => {
  let component: NgmatTableStateManagerComponent;
  let fixture: ComponentFixture<NgmatTableStateManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmatTableStateManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmatTableStateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
