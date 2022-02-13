import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctuditListComponent } from './proctudit-list.component';

describe('ProctuditListComponent', () => {
  let component: ProctuditListComponent;
  let fixture: ComponentFixture<ProctuditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProctuditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProctuditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
