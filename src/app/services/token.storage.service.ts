import { Injectable } from '@angular/core';


const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(

  ) {}

  public saveTokenInfo(accessToken:any,tokenType:any,expiresIn:any){

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("tokenType", tokenType);
    localStorage.setItem("expiresIn", expiresIn);
  }
  loadToken() {
    let data = localStorage.getItem("accessToken");
    if (data) {
      return data;
    }
    return null;
  }
  saveArtistInfo(data:any){
    localStorage.setItem("artistInfo", JSON.stringify(data));
  }
  getArtistInfo(){
    let data = localStorage.getItem("artistInfo");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  removeArtistsInfo(){
    localStorage.removeItem("artistInfo");
  }
  deleteAll(){
    localStorage.clear();
  }
}

