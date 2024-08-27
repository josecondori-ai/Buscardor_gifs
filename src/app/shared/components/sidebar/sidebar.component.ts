import { Component } from '@angular/core';
import { GifsServices } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(public gifsServices:GifsServices){}

  get tags():string[]{
    return this.gifsServices.tagsHistory
  }

  searchTag(tag:string):void{
    this.gifsServices.searchTag(tag)
  }

}
