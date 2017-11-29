import { Component, OnInit } from '@angular/core';
import { FileItem } from "../../models/file-item";
import { CargarImagenesService } from "../../carga-imagenes.service";

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

  estaSobreDropZone:boolean = false;
  permiteCargar:boolean = true;
  archivos:FileItem[];

  constructor( public _cargaImagenes:CargaImagenesService ) { }

  ngOnInit() {
  }
 //$scope.patternNombre=/^[a-zA-Z]*$/;
}
