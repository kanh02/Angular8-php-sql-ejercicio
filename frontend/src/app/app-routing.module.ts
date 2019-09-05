import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';


const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'productos',component:ProductosComponent},
  {path:'crear-productos',component:HomeComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'crear-producto',component:CrearProductoComponent},
  {path:'producto/:id',component:ProductoDetailComponent},
  {path:'editar-producto/:id',component:ProductoEditComponent},
  {path:'',component:HomeComponent},

  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
