import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public nuevasCanciones: any[];;

  constructor( private spotify: SpotifyService ) {

     spotify.getNewReleases()
            .subscribe( ( data:any ) => {
              console.log(data.albums.items);
              this.nuevasCanciones = data.albums.items;
     })

   }

  
}
