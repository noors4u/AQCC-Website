import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqccMatButtonComponent } from './mat-button.component';

describe('MatButtonComponent', () => {
  let component: AqccMatButtonComponent;
  let fixture: ComponentFixture<AqccMatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqccMatButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqccMatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
