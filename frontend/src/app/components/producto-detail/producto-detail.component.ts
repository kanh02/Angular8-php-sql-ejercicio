import { Component } from '@angular/core';
import { ProductoService } from '../../services/productos/productos.service';
import { Producto } from '../../models/producto';
import {Router,ActivatedRoute,Params}from '@angular/router';


@Component({
    selector:'producto-detail',
    templateUrl: '/producto-detail.component.html',
    providers:[ProductoService]
})
export class ProductoDetailComponent{

    public producto:Producto;

    constructor(
        private _productoService:ProductoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){

    }

    ngOnInit() {
       console.log("detalles de productos cargado...");
       this.getproducto();
        
    }

    getproducto(){
        this._route.params.forEach((params:Params)=>{
            let id = params['id'];
            this._productoService.getProducto(id).subscribe(
                response=>{
                    if(response == 200){
                        //this.producto = response;
                        console.log(response);

                    }else{
                        this._router.navigate(['/productos']);
                    }
                },
                error=>{
                    console.log(<any>error);
                }
            );

        });

    }

}