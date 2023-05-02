import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchedNestedComponent } from './patched-nested.component';

describe('PatchedNestedComponent', () => {
  let component: PatchedNestedComponent;
  let fixture: ComponentFixture<PatchedNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchedNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchedNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
