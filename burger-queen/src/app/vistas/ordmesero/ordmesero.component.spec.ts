import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdmeseroComponent } from './ordmesero.component';

describe('OrdmeseroComponent', () => {
  let component: OrdmeseroComponent;
  let fixture: ComponentFixture<OrdmeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdmeseroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdmeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
