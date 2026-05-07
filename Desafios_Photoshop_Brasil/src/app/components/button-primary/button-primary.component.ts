import {Component, Input, Output,EventEmitter} from '@angular/core';
import {CommonModule} from "@angular/common";

type BtnVariants = "primary" | "secoundary";

@Component({
  selector: 'button-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Input()disabled:boolean = false;
  @Input()variant:BtnVariants= "primary";
  @Input()loading:boolean = false;

  submit(){
    this.onSubmit.emit();
  }
}
