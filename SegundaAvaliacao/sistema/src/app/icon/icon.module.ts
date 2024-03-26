import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconService } from './icon.service';



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IconComponent], // Exporta o componente a ser utilizado
  providers: [IconService] // Declara o service internamente
})
export class IconModule { }
