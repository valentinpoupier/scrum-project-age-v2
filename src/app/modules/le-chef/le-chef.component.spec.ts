import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeChefComponent } from './le-chef.component';

describe('LeChefComponent', () => {
  let component: LeChefComponent;
  let fixture: ComponentFixture<LeChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
