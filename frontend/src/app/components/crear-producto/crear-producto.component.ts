import { Component, OnInit } from '@angular/core';
import { Router,Params,ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/productos/productos.service';
import { Producto } from '../../models/producto';
import { GLOBAL } from '../../services/global';


@Component({
    selector: 'crear-producto',
    templateUrl: '/crear-producto.component.html',
    providers:[ProductoService]

})
export class CrearProductoComponent{

    public title:string;
    public producto:Producto;
    public filesToUpload;
    public resultUpload;
    



    constructor(
        private _productoService:ProductoService,
        private _route:ActivatedRoute,
        private _router:Router

    ){
        this.title = "crear un nuevo producto";
        this.producto = new Producto(0,'','',0,'');

    }

    OnInit(){
        console.log("agregar cargado...");
    }

    onSubmit(){
        console.log(this.producto);
        if(this.filesToUpload && this.filesToUpload.length >= 1){
            this._productoService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result)=>{
                console.log(result);
                this.resultUpload = result;
                this.filesToUpload = this.resultUpload.filename;
                this.saveProducto();


            },
            error=>{
                console.log(<any>error);
            }); 
        }else{
            this.saveProducto();
        }
    }

    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(response=>{
            if(response == 200){
                this._router.navigate(['/productos']); ///si se guarda correctamente el producto redirige a la pagina de productos
                }else{
                    console.log(response);
                }
            },
            error=>{
                console.log(<any>error);
            });
    }

    fileChangeEvent(fileInput:any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }






}