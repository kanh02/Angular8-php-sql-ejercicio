import { Component } from '@angular/core';


@Component({
    selector: 'home',
    templateUrl:'/home.component.html'
})

export class HomeComponent{
    public title:string;

    constructor(){
        this.title = 'WebApp de productos';
    }
    ngOnInit(){
        console.log("home funcionando");
    }
}

