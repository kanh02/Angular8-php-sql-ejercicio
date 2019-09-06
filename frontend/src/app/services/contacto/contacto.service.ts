import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs';
import { Contacto } from '../../models/contacto';


@Injectable()
export class ContactoService {

    public url:string;
    public contacto:Array<any>


    constructor(
        public _http:HttpClient
    ){
        this.url = GLOBAL.url;

    }
   
    addComentario(contacto:Contacto):Observable<any>{
        let json = JSON.stringify(contacto);
        let params = 'json'+json;
        let headers = new HttpHeaders({'Content-Type':'application/xwww-form-urlencode'});

        return this._http.post(this.url+'contacto',params,{headers:headers});
    }

}
