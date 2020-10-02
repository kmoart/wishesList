import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item-model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: '';

  constructor( private deseosService: DeseosService,
                private route: ActivatedRoute ) {

      const listaId = this.route.snapshot.paramMap.get('listaId');
      
      this.lista = this.deseosService.obtenerLista( listaId );
 
  }

  ngOnInit() {
  }

  agregarItem(){

    if( this.nombreItem.length === 0 ){
      return;
    }

    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
    this.deseosService.guardarStorage();
    // la ventaja en javascript es que todos los objetos son pasados por referencia 
    // Aunque la lista creada en éste archivo js sientan que es una nueva lista 
    // la lista viene del mismo servicio(deseosService) que se llama en el constructor
    // Por lo tanto las modificaciones que yo haga directamente a ésta lista afecta el objeto que se encuentra en el servicio deseosService
    // por eso se puede usar el metodo guardarStorage para actualizar y grabar los items y la lista 

  }

  cambioCheck( item: ListaItem ){

    //Se necesita contar cuantos elementos de la lista están pendientes cada vez que se cambia el check 
    
    const pendientes = this.lista.items
                  .filter( itemData => !itemData.completado).length;//a parte de validar los elementos, pregunta cuantos elemetos hay.
                  //filter es un método que me regresa una colección de elementos que cumplan cierta condición.

                  // console.log( { pendientes } ); se imprime un objeto literal en este caso lo que devuelva la función filter.
                  //Que devuelve la cantidad de pendientes por marcar el checkbox.
    
    if( pendientes === 0 ){
        this.lista.terminadaEn = new Date();
        this.lista.terminada = true;
    }else{
        this.lista.terminadaEn = null
        this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();

    console.log(this.deseosService.listas);
  }

  borrar( i: number ){

    this.lista.items.splice( i, 1 );
    this.deseosService.guardarStorage();
  }

}
