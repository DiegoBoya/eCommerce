import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eComerce';
  foto = 'https://www.w3schools.com/howto/img_avatar.png';
  COMPONENT = 'appRoot - ';
  state: boolean = true;

  onLoadImage(img: string){
    console.log(this.COMPONENT, 'imagen llega al padre', img)
  }

  changeState(){
    this.state = !this.state;
  }

}
