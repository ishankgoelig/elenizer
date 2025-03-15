import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KangenWaterComponent } from './kangen-water.component';

describe('KangenWaterComponent', () => {
  let component: KangenWaterComponent;
  let fixture: ComponentFixture<KangenWaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KangenWaterComponent]
    });
    fixture = TestBed.createComponent(KangenWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
