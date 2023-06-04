import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImage(newImg: string){
    this.img= newImg;
    // puedo agregar codigo especifico
    // para el componente que cambio
    console.log('cambio el componente img ->', this.img)
  }

  @Input() img2: string = '';
  @Input() img3: string = '';
  @Input() img4: string = '';

  imgDefault = "./../../../assets/images/default.png";

  @Output() loaded = new EventEmitter<string>();
  COMPONENT = 'imgComponent - ';
  counter = 0;
  counterResult: number | undefined;

  constructor() {
  }

  printDefault(){
    this.img = this.imgDefault;
  }

  imageLoadedOk(){
    console.log(this.COMPONENT, 'the image has loaded succesfuly');
    this.loaded.emit(this.img);
  }

  ngOnInit(): void {
    // before render
    // asincronismo permitido
    this.counterResult = window.setInterval(() => {
      this.counter++;
      console.log('counter:', this.counter)
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('cambio el componente', changes)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy executed')
    window.clearInterval(this.counterResult);
  }





}
