import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token.storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  constructor(
    public tokenService:TokenStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  toSearch(){
    this.router.navigate(['/artistsearch']);
  }
  Login(){
    this.router.navigate(['/login']);
  }
}
