import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


  mostrardatos(){
    console.log("Holaasdas asd d")
  }

  ngOnInit() {
    this.mostrardatos();
    this.enviarComentario();

  }

  enviarComentario(){
    console.log("Hoola");
  }

}
