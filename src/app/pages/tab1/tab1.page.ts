import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ListaItem } from 'src/app/models/lista-item-model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  

  constructor( public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {}

  async agregarLista(){// la función async , transforma la función a una promesa. Es decir puedo usar sus metodos finally catch y then.
  
    

    const alert = await this.alertCtrl.create({// await sirve para que se espere a ejecutar el código que sigue y luego asignarlo a la constante alert.
      //Para hacer funcionar ésta opción de await, se necesita que la función sea async
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs:[{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {// el handler es una función que se va a disparar cuando el botón se presione o cuando el popup se cierre o en este caso el alert se cierre.
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: ( data )=>{// en éste caso la función handler recibe la data 
            console.log(data);
            if( data.titulo.lenght === 0){
              return;
            }

            const listaId = this.deseosService.crearLista( data.titulo );
            
            //Si no es cero el titulo, se debe crear la lista
            this.router.navigateByUrl(`tabs/tab1/agregar/${ listaId }`);
          }
        }
      ]
    });

    await alert.present();// el await está demás aquí puede ser opcional.
  }

  
    
}


