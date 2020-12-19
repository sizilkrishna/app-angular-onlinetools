import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThebookComponent } from './thebook.component';

describe('ThebookComponent', () => {
  let component: ThebookComponent;
  let fixture: ComponentFixture<ThebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
