import { ListaItem } from './lista-item-model';


export class Lista{// los nombres de la clase van siempre con la primera letra en mayúscula
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ){
        this.titulo = titulo;

        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];

        this.id = new Date().getTime();//se obtiene un número entero único
    }
}