import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public nuevasCanciones: any[];
  public loading:boolean;
  public error:boolean;

  constructor( private spotify: SpotifyService ) {
    
    this.loading = true;
    this.error = false;
    
     spotify.getNewReleases()
            .subscribe( ( data:any ) => {
              console.log(data);
              this.nuevasCanciones = data;
              this.loading = false;
     }, ( errorServicio ) => {
       this.loading = false;
       this.error = true;

       console.log(errorServicio.error.error.message)
     })
   }

}
