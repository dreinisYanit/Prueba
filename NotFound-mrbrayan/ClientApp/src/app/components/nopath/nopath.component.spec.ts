import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopathComponent } from './nopath.component';

describe('NopathComponent', () => {
  let component: NopathComponent;
  let fixture: ComponentFixture<NopathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
