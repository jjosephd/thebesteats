import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInputComponent } from './main-input.component';

describe('MainInputComponent', () => {
  let component: MainInputComponent;
  let fixture: ComponentFixture<MainInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
