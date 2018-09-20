/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserLibFirstComponent } from './user-lib-first.component';

describe('UserLibFirstComponent', () => {
  let component: UserLibFirstComponent;
  let fixture: ComponentFixture<UserLibFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLibFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLibFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
