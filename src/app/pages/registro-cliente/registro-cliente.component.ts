import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

dropzonePostUrl:any = 'dropzonePostUrl'
dropzonePostUrl1:any = 'dropzonePostUrl1'

  constructor() { }

  ngOnInit() {
  }
 //$scope.patternNombre=/^[a-zA-Z]*$/;
}
