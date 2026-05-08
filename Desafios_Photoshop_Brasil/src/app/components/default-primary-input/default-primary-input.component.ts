import { Component ,Input} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

type InputTypes = "text" | "email"|"password"


@Component({
  selector: 'app-default-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './default-primary-input.component.html',
  styleUrl: './default-primary-input.component.scss'
})
export class DefaultPrimaryInputComponent {
  @Input() type: InputTypes= "text";
  @Input() formName: string= "";
  @Input() placeholder: string= "";
  @Input() label: string= "";
}
