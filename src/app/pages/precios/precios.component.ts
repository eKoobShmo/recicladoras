import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Producto} from "../../interfaces/producto";

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {

    productos:FirebaseListObservable<Producto[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.productos = this.db.list('Productos')
  }
  
}
