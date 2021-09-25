import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.less']
})
export class FormArtistComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
@Input() detail:any;
@Output() toalbums=new EventEmitter<any>();
  ngOnInit(): void {
  }
  toAlbums(){
    if(this.detail!=null){
      this.toalbums.emit(this.detail.id);
      this.router.navigate(['/albums', this.detail.id]);
    }
  }
}
