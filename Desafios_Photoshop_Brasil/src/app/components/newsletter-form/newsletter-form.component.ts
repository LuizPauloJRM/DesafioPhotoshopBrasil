import { Component } from '@angular/core';
import {ButtonPrimaryComponent} from "../button-primary/button-primary.component";

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [ButtonPrimaryComponent],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {

}
