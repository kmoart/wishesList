import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false 
  // Por defecto todos los pipes son puros. Solo se van a llamar cuando la acción del ciclo de  detección de cambios suceda en el mismo componente donde se están usando.  
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true ): Lista[] { 
    
    return listas.filter( lista => lista.terminada === completada );
  }

}
