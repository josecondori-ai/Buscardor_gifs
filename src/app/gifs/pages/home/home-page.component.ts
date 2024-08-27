import { Component } from '@angular/core';
import { GifsServices } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(public gifsService:GifsServices){}

  get gifs():Gif[]{
    return this.gifsService.gifList;
  }

}
