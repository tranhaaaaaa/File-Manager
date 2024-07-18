import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootNodeComponent } from './root-node.component';

describe('RootNodeComponent', () => {
  let component: RootNodeComponent;
  let fixture: ComponentFixture<RootNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootNodeComponent]
    });
    fixture = TestBed.createComponent(RootNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
