import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListasComponent
  ],
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,// Se necesita importar el módulo de IonicModule, para hacer funcionar la lista en listas.component.html
    PipesModule
  ]
})
export class ComponentsModule { }
