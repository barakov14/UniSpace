import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCreateTemplateComponent } from './form-create-template.component';

describe('FormCreateTemplateComponent', () => {
  let component: FormCreateTemplateComponent;
  let fixture: ComponentFixture<FormCreateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCreateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
