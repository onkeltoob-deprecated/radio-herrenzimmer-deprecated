import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as moment from 'moment';

import { MixListComponent } from './mix-list.component';

describe('MixListComponent', () => {
  let component: MixListComponent;
  let fixture: ComponentFixture<MixListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
