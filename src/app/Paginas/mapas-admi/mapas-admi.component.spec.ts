import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasAdmiComponent } from './mapas-admi.component';

describe('MapasAdmiComponent', () => {
  let component: MapasAdmiComponent;
  let fixture: ComponentFixture<MapasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapasAdmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
