import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTheatersComponent } from './edit-theaters.component';

describe('EditTheatersComponent', () => {
  let component: EditTheatersComponent;
  let fixture: ComponentFixture<EditTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTheatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
