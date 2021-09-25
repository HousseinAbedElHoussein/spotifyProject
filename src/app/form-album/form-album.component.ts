import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.less']
})
export class FormAlbumComponent implements OnInit {

  constructor() { }
  @Input() detail:any;
  artists:string='';
  ngOnInit(): void {
    if(this.detail!=null){
       if( this.detail.artists.length==1){
         this.artists=this.detail.artists[0].name;
       }else{
         for (let index = 0; index <  this.detail.artists.length; index++) {
           const element =  this.detail.artists[index];
           if( this.detail.artists[index+1]!=null &&  this.detail.artists[index+1]!=undefined){
            this.artists+=element.name+", ";
           }
           else{
            this.artists+=element.name;
           }
         
         }
       }
    }
  }

}
