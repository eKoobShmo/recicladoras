import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviarComentarioo(){

    console.log("hola mundo");
  }
  obtenerComentarios(){
    console.log("comentarios qwerty")
  }

}
