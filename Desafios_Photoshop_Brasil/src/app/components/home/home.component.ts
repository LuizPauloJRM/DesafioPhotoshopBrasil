import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {NgComponentOutlet, NgOptimizedImage} from "@angular/common";
import {ButtonPrimaryComponent} from "../button-primary/button-primary.component";


//Standalone components imports e providers
@Component({
  selector: 'app-home',
  standalone: true,
  providers:[],
  imports: [HeaderComponent,NgOptimizedImage,ButtonPrimaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
