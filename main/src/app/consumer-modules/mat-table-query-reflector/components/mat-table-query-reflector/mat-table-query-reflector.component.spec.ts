import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableQueryReflectorComponent } from './mat-table-query-reflector.component';

describe('MatTableQueryReflectorComponent', () => {
  let component: MatTableQueryReflectorComponent;
  let fixture: ComponentFixture<MatTableQueryReflectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableQueryReflectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableQueryReflectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
