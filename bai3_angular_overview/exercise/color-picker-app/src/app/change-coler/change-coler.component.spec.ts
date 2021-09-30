import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColerComponent } from './change-coler.component';

describe('ChangeColerComponent', () => {
  let component: ChangeColerComponent;
  let fixture: ComponentFixture<ChangeColerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeColerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeColerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
