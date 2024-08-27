import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})


export class GifsServices {
    
gifList:Gif[]=[]

    _tagsHistory:string[]=[]
    apiKey:string='8Pg30PNeh9mwjS077FTUJZDZAJzbuaoO'
    serviceUrl:string='https://api.giphy.com/v1/gifs'
    
    constructor( public http:HttpClient) { }
    
   //getter
    get tagsHistory(){
        return [...this._tagsHistory]
        // ['supermario']
    }

    async searchTag(tag:string):Promise<void>{
        this._tagsHistory.unshift(tag)
        // console.log(this._tagsHistory)
        // console.log('hola')
        
        
        //Primera forma
       // fetch('https://api.giphy.com/v1/gifs/search?api_key=8Pg30PNeh9mwjS077FTUJZDZAJzbuaoO&q=super mario&limit=10')
       //  .then(pepe=>pepe.json())
        //  .then(data=>console.log(data))

        //segunda forma
        // const resp=await fetch('https://api.giphy.com/v1/gifs/search?api_key=8Pg30PNeh9mwjS077FTUJZDZAJzbuaoO&q=dragon ball&limit=10')
        // const data=await resp.json()
        // console.log(data)

        //TERCER FORMA CON EL MODULO DE ANGULAR HTTP

        const params=new HttpParams()
        .set('api_key',this.apiKey)
        .set('limit',10)
        .set('q',tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
        .subscribe(resp=>{
            // console.log(resp)
            this.gifList=resp.data
            console.log({gifs:this.gifList})
        })
        //observable
        
        // console.log('adios')


    }



}