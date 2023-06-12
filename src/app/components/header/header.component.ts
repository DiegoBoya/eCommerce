import { Component, OnInit} from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSideMenu = false;
  counter = 0;

  constructor(private storeService: StoreService){

  }
  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
    })
  }

  toggleSideMenu(){
    this.showSideMenu = !this.showSideMenu;
  }

}
