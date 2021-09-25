import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArtistsearchComponent } from './artistsearch/artistsearch.component';
import { FormArtistComponent } from './form-artist/form-artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormAlbumComponent } from './form-album/form-album.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ArtistsearchComponent,
    FormArtistComponent,
    AlbumsComponent,
    NavigationComponent,
    FormAlbumComponent,

  
  ],
  imports: [

    BrowserModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    MatIconModule,
    MatButtonModule,

    MatCardModule,

    MatInputModule,
    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatTooltipModule,

  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
