import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplefieldsComponent } from './simplefields.component';

describe('SimplefieldsComponent', () => {
  let component: SimplefieldsComponent;
  let fixture: ComponentFixture<SimplefieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplefieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplefieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
