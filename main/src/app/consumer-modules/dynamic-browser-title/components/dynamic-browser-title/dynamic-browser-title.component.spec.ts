import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBrowserTitleComponent } from './dynamic-browser-title.component';

describe('DynamicBrowserTitleComponent', () => {
  let component: DynamicBrowserTitleComponent;
  let fixture: ComponentFixture<DynamicBrowserTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicBrowserTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBrowserTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
