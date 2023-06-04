import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {

  imagen: string = '';

  @Input('img')
  set changeImage(newImg: string){
    this.imagen= newImg;
    // puedo agregar codigo especifico
    // para el componente que cambio
    console.log('cambio el componente img ->', this.imagen)
  }

  @Input() img2: string = '';
  @Input() img3: string = '';
  @Input() img4: string = '';

  imgDefault = "./../../../assets/images/default.png";

  @Output() loaded = new EventEmitter<string>();
  COMPONENT = 'imgComponent - ';



  constructor() {
  }

  printDefault(){
    this.imagen = this.imgDefault;
  }

  imageLoadedOk(){
    console.log(this.COMPONENT, 'the image has loaded succesfuly');
    this.loaded.emit(this.imagen);
  }

  ngOnInit(): void {
    // before render
    // asincronismo permitido

  }

  ngOnChanges(changes: SimpleChanges){
    console.log('cambio el componente', changes)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy executed')

  }





}
