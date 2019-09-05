import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/productos/productos.service';


@Component({
    selector:'producto-edit',
    templateUrl: '../crear-producto/crear-producto.component.html', ///falta corregir
    providers:[ProductoService]
})
export class ProductoEditComponent{

    public title:string;
    public producto:Producto;
    public filesToUpload;
    public resultUpload;


    constructor(
        private _prodcutoService:ProductoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.title = 'Editar Producto';

    }

    ngOnInit() {

        
    }

}