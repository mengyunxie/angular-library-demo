/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppOwnMdFirstComponent } from './appOwnMdFirst.component';

describe('AppOwnMdFirstComponent', () => {
  let component: AppOwnMdFirstComponent;
  let fixture: ComponentFixture<AppOwnMdFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOwnMdFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOwnMdFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
