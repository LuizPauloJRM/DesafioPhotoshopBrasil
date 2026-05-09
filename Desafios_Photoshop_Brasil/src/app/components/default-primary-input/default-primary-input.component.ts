import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";

type InputTypes = "text" | "email" | "password";

@Component({
  selector: 'app-default-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultPrimaryInputComponent),
      multi: true
    }
  ],
  templateUrl: './default-primary-input.component.html',
  styleUrl: './default-primary-input.component.scss'
})
export class DefaultPrimaryInputComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";


  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  // Método chamado quando o usuário digita no input (HTML)
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  // --- Métodos da Interface ControlValueAccessor ---
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
