import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from '../../services/contacto/contacto.service';


@Component({
    selector:'contacto',
    templateUrl:'/contacto.component.html',
    providers:[ContactoService]
})


export class ContactoComponent{

    public contacto:Contacto;

    constructor(
        private _contactoService:ContactoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){

        this.contacto = new Contacto('','','');
    
    }

    OnInit(){
        console.log("contacto funcionando")
    }

    onSubmit(){
        console.log(this.contacto);

        this._contactoService.addComentario(this.contacto).subscribe(response=>{
            if(response == 200){
                this._router.navigate(['/contacto']); ///si se guarda correctamente el producto redirige a contacto
                }else{
                    console.log(response);
                }
            },
            error=>{
                console.log(<any>error);
            });
    }
}