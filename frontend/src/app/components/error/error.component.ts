import { Component } from '@angular/core';


@Component({
    selector:'error',
    templateUrl:'/error.component.html'
})

export class ErrorComponent {

    public title:string;


    constructor(){
        this.title = "Error! pagina no encontrada";
    }
    ngOnInit(){
        console.log('componente error');
        
    }

}
