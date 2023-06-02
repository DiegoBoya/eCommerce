import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eComerce';
  foto = 'https://www.w3schools.com/howto/img_avatar.png';
  COMPONENT = 'appRoot - '

  onLoadImage(img: string){
    console.log(this.COMPONENT, 'imagen llega al padre', img)

  }


}
