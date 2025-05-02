import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AifC01Component } from './aif-c01.component';

describe('AifC01Component', () => {
  let component: AifC01Component;
  let fixture: ComponentFixture<AifC01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AifC01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AifC01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
