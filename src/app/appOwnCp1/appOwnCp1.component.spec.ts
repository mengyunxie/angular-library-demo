/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppOwnCp1Component } from './appOwnCp1.component';

describe('AppOwnCp1Component', () => {
  let component: AppOwnCp1Component;
  let fixture: ComponentFixture<AppOwnCp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOwnCp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOwnCp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
