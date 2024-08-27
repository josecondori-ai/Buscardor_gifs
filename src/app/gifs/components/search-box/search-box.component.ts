import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServices } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h4>Buscador gifs</h4>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs"
    (keyup.enter)="searchTag()"
    #pepe>
    `
})

export class SearchBoxComponent   {
    
@ViewChild('pepe')
tagInput!:ElementRef<HTMLInputElement>

constructor(public gifsService:GifsServices){}

    searchTag( ){

        const newTag=this.tagInput.nativeElement.value
        // console.log({newTag})
            this.gifsService.searchTag(newTag)


        this.tagInput.nativeElement.value=""

    }
}