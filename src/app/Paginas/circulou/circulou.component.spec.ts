import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculouComponent } from './circulou.component';

describe('CirculouComponent', () => {
  let component: CirculouComponent;
  let fixture: ComponentFixture<CirculouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
