import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/productos/productos.service';
import { GLOBAL } from '../../services/global';


@Component({
    selector:'producto-edit',
    templateUrl: '../crear-producto/crear-producto.component.html',
    providers:[ProductoService]
})
export class ProductoEditComponent{

    public title:string;
    public producto:Producto;
    public filesToUpload;
    public resultUpload;
    public is_edit;


    constructor(
        private _productoService:ProductoService,
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.title = 'Editar Producto';
        this.producto = new Producto(1,'','',0,'');
        //ponemos el formulario a cero para editarlo
        this.is_edit = true;
    }

    ngOnInit() {
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

    onSubmit(){
        console.log(this.producto);
        if(this.filesToUpload && this.filesToUpload.length >= 1){
            this._productoService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then((result)=>{
                
                console.log(result);
                this.resultUpload = result;
                this.filesToUpload = this.resultUpload.filename;
                this.updateProducto();
            },
            error=>{
                console.log(<any>error);
            }); 
        }else{
            this.updateProducto();
        }
    }

    updateProducto(){
        this._route.params.forEach((params:Params)=>{
        let id = params['id'];
        this._productoService.editProducto(this.producto,id).subscribe(response=>{
            if(response == 200){
                this._router.navigate(['/productos',id]); ///si se guarda correctamente el producto redirige a la pagina de productos
                }else{
                    console.log(response);
                }
            },
            error=>{
                console.log(<any>error);
            }
        );
    });
} 

    fileChangeEvent(fileInput:any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
 
}