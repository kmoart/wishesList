import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList ) lista: IonList;
  // El ViewChild me permite agarrar un componente html. 
  //Es de tipo IonList porque necesito tomar el componente <ion-list> del html listas.component.html. En este caso solo hay un ion-list, si hubiera varios, sería un arreglo de varios ion-list 
  //Para saber si irnos a la opción de pendientes o completados, deberemos realizar un @Input
  @Input() terminada = true;

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  listaSeleccionada( lista: Lista ){

    if( this.terminada ){
      
      this.router.navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);
    }else{
      this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
    }
      
  }

  borrarLista( lista: Lista ){
    this.deseosService.borrarLista( lista );
  }

  async editarTitulo( lista: Lista ){// la función async , transforma la función a una promesa. Es decir puedo usar sus metodos finally catch y then.
  
    

    const alert = await this.alertCtrl.create({// await sirve para que se espere a ejecutar el código que sigue y luego asignarlo a la constante alert.
      //Para hacer funcionar ésta opción de await, se necesita que la función sea async
      cssClass: 'my-custom-class',
      header: 'Nuevo titulo',
      inputs:[{
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {// el handler es una función que se va a disparar cuando el botón se presione o cuando el popup se cierre o en este caso el alert se cierre.
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: ( data )=>{// en éste caso la función handler recibe la data 
            console.log(data);
            if( data.titulo.lenght === 0){
              return;
            }

            lista.titulo = data.titulo;
            this.deseosService.guardarStorage(); 
            this.lista.closeSlidingItems();
            
            
          }
        }
      ]
    });

    await alert.present();// el await está demás aquí puede ser opcional.
  }

}
