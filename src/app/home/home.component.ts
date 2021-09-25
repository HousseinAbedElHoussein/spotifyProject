import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token.storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private tokenService:TokenStorageService,
    private router: Router,

  ) { }


  ngOnInit(): void {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
      this.getReturnedParamsFromSpotifyAuth(window.location.hash);
      this.tokenService.saveTokenInfo(access_token,token_type,expires_in);
      this.router.navigate(['/artistsearch']);
    }
  }
  getReturnedParamsFromSpotifyAuth(hash:any){
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater:any, currentValue:any) => {
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
    return paramsSplitUp;
  }
}

