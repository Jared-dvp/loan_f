import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  links = [
    {label: 'Home', anchor: 'home'},
    {label: 'About', anchor: 'about'},
    {label: 'Services', anchor: 'services'},
    {label: 'Contact us', anchor: 'contact'}
  ]
}
