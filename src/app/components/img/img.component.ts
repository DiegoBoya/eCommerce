import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  imgDefault = "./../../../assets/images/default.png";

  @Output() loaded = new EventEmitter<string>();
  COMPONENT = 'imgComponent - ';
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
  }





}
