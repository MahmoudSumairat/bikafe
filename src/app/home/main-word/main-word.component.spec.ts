import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWordComponent } from './main-word.component';

describe('MainWordComponent', () => {
  let component: MainWordComponent;
  let fixture: ComponentFixture<MainWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
