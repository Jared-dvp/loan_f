import { Component , Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrl: './typing-effect.component.scss'
})
export class TypingEffectComponent implements OnInit{
@Input() text: string = "";
@Input() fullText: string = 'AssetFlex es una empresa innovadora dedicada a la gestión y préstamo de activos dentro de organizaciones. Proveemos soluciones eficientes para el préstamo temporal de equipos y herramientas, permitiendo a las empresas optimizar el uso de sus recursos sin incurrir en gastos de adquisición adicionales.';
@Input() index: number = 0;


ngOnInit(): void {
    this.type();
}

type() {
  if (this.index < this.fullText.length) {
    this.text += this.fullText.charAt(this.index);
    this.index++;
    setTimeout(() => this.type(), 50);
  }
}

}
