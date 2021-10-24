/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JogosComponent } from './jogos.component';

describe('JogosComponent', () => {
  let component: JogosComponent;
  let fixture: ComponentFixture<JogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
