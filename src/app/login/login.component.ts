import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token.storage.service';
const CLIENT_ID="fbb96f3aade7458f9cadeeac945b8ad3";
const SPOTIFY_AUTHORIZE_ENDPOINT="https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN="http://localhost:4200/home";
const SPACE_DELIMITTER="%20";
const SCOPES=["user-read-currently-playing","user-read-playback-state"];
const SCOPES_URL_PARAM=SCOPES.join(SPACE_DELIMITTER);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  constructor(
    private tokenService:TokenStorageService,
  ) { }
  maxHeight=0;
  ngOnInit(): void {
    this.tokenService.deleteAll();
    this.maxHeight= document.body.offsetHeight;
  }
  login(){
    window.location.href=SPOTIFY_AUTHORIZE_ENDPOINT+"?client_id="+CLIENT_ID+"&redirect_uri="+REDIRECT_URL_AFTER_LOGIN+"&scope="+SCOPES_URL_PARAM
    +"&response_type=token&show_dialog=true"
  }
}
