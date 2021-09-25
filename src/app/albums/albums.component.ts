import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AccService } from '../services/acc.service';
import { TokenStorageService } from '../services/token.storage.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.less']
})

export class AlbumsComponent implements OnInit {
  artistId:any;
  page=12;
  offset=0;
  artistDetail={
    name:'',
    imgURL:'',
    type:'Albums'
  }
  next=false;
  albums:any=[];
  constructor(
    private route: ActivatedRoute,
    private accountService:AccService,
    private router: Router,
    private tokenService:TokenStorageService,
  ) { 
    this.route.params.subscribe( params => {
      this.artistId=params.id
    } );
  }
  maxHeight=0;
  ngOnInit(): void { 
    if(this.tokenService.loadToken()!=null){
      Notiflix.Loading.init({svgColor:"#32aec6",fontFamily:"roboto",});
      this.maxHeight= document.body.offsetHeight-60;
      this.getArtistById();
       this.getAlbums();
    }
    else{
      this.tokenService.deleteAll();
      this.router.navigate(['/login']);
    }

  
  }
  getArtistById(){
    Notiflix.Loading.standard("Loading...");
      this.accountService.getArtistById(this.artistId).subscribe(result=>{
          Notiflix.Loading.remove();
          this.artistDetail.name=result.name;
          if(result.images.length>0){
            this.artistDetail.imgURL=result.images[0].url;
          }
          else{
            this.artistDetail.imgURL='../../assets/images/default.png';
          }
      },(error)=>{
        Notiflix.Loading.remove();

        if(error.message=="Invalid access token"){
          this.tokenService.deleteAll();
          this.router.navigate(['/login']);
        } 
      })
  }
  getAlbums(){
    Notiflix.Loading.standard("Loading...");
    this.accountService.getAlbums(this.artistId,this.page,this.offset).subscribe(data=>{
      this.albums=data.items;
      this.next=true;

      Notiflix.Loading.remove();
    },(error)=>{
      if(error.error.error.message.includes('token')){
        this.tokenService.deleteAll();
        Notiflix.Loading.remove();
        this.router.navigate(['/login']);


      } 
    })
  }
  getPaginationInfo(event:any) {
  
    if (
    (event.target.scrollTop + event.target.clientHeight >=
      event.target.scrollHeight)  && this.next==true 
    ){
      this.offset+=this.page;
      Notiflix.Loading.standard("Loading...");
      this.accountService.getAlbums(this.artistId,this.page,this.offset).subscribe(data=>{
        Notiflix.Loading.remove();
        if(data.items.length==0)
        {
          this.next=false;
        }
        else{
          data.items.forEach((element:any)=>{
            this.albums.push(element);
          })
        }

      },(error)=>{
        console.log(error.error.error.message,"eror");
        this.offset-=this.page;
        Notiflix.Loading.remove();
        if(error.error.error.message.includes('token')){
          this.tokenService.deleteAll();
          Notiflix.Loading.remove();
          this.router.navigate(['/login']);

  
        } 
      })
    }
   
  }
}
