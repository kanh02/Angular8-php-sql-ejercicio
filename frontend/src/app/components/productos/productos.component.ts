import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductoService } from '../../services/productos/productos.service';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto';




@Component({
    selector:'productos',
    templateUrl:'/productos.component.html',
    providers:[ProductoService]
})
export class ProductosComponent{

    public title:string;
    public productos: Producto[];
    public confirmado;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _productoService:ProductoService
    ){
        this.title = "listado de productos";
        this.confirmado = null;
    }

    ngOnInit(){
       console.log('productos listado');
       this.getProductos();  
    }
    getProductos(){

        this._productoService.getProductos().subscribe(
            result=>{
                result = this.productos;
                console.log(result+"llamada ok");
                console.log(this.productos);
 
            },error=>{
                console.log(<any>error+"error en la llamada Get");
        });
    }

    borrarConfirm(id){
        this.confirmado = id;
    }
    cancelarConfirm(id){
        this.confirmado = null;
    }

    onDeleteProducto(id){

        this._productoService.deleteProducto(id).subscribe(
            response=>{
                if(response == 200){
                    console.log(response);
                    this.getProductos();
                }else{
                    console.log("error en el llamado");
                }
            },
            error=>{
                console.log(error);
            }
        );

    }

}