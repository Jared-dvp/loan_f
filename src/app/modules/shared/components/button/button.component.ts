import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() label: string = '';
@Input() icon: string = '';
@Input() type: 'button' | 'submit' | 'reset' = 'button';
@Input() styleType: 'primary' | 'secondary'  | 'warn' = 'primary';
@Input() disabled: boolean = false;
@Input() iconOnly: boolean = false; 
@Input() size: 'small' | 'medium' | 'large' = 'medium';
}
