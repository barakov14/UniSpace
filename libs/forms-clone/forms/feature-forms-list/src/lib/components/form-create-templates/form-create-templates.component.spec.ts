import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCreateTemplatesComponent } from './form-create-templates.component';

describe('FormCreateTemplatesComponent', () => {
  let component: FormCreateTemplatesComponent;
  let fixture: ComponentFixture<FormCreateTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCreateTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
