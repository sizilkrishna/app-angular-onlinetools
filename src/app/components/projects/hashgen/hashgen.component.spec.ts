import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashgenComponent } from './hashgen.component';

describe('HashgenComponent', () => {
  let component: HashgenComponent;
  let fixture: ComponentFixture<HashgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
