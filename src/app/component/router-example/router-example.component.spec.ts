import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterExampleComponent } from './router-example.component';

describe('RouterExampleComponent', () => {
  let component: RouterExampleComponent;
  let fixture: ComponentFixture<RouterExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
