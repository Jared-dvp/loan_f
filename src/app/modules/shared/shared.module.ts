import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { TypingEffectComponent } from './components/typing-effect/typing-effect.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent,
    TypingEffectComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    ButtonComponent,
    TypingEffectComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
