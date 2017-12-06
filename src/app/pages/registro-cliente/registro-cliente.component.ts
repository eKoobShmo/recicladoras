import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

dropzonePostUrl:any = 'dropzonePostUrl'
dropzonePostUrl1:any = 'dropzonePostUrl1'
public nombres:string;
public app:string;
public apm:string;
public rfc:string;
public ine:File;
public comp:File;
public fpl:string;
public fpr:string;
public upload:boolean;
public progress:number=0;

constructor( archivo:File ) {

  }

  ngOnInit() {
  }
 //$scope.patternNombre=/^[a-zA-Z]*$/;
}
