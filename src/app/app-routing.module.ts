import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsearchComponent } from './artistsearch/artistsearch.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'artistsearch', component:ArtistsearchComponent},
  { path: 'albums/:id', component:AlbumsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
