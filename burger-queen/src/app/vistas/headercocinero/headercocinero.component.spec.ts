import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercocineroComponent } from './headercocinero.component';

describe('HeadercocineroComponent', () => {
  let component: HeadercocineroComponent;
  let fixture: ComponentFixture<HeadercocineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercocineroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadercocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
