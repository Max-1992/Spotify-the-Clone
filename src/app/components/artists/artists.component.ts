import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {

  public artist:any;
  public topTtracks:any[];
  public tracksAudio:string
  public loading:boolean;

  constructor( private activatedroute: ActivatedRoute,
               private spotifyservice: SpotifyService ) {

      
      this.tracksAudio = `https://open.spotify.com/embed?uri=`

      this.activatedroute.params.subscribe( params => { 
          
        this.getArtistId( params[ 'id' ] );

        this.getTopTracks( params[ 'id' ] );
       
      })
   };

   getArtistId( id:string ){
      this.loading = true;

      this.spotifyservice.getArtistId( id )
          .subscribe( ( data:any ) => {
              this.artist = data;
              this.loading = false;
              
      })
   };

   getTopTracks( id:string ){
     this.spotifyservice.getTopTracks( id )
         .subscribe( data => {
           this.topTtracks = data;

           console.log( this.topTtracks );
         } )
   }
  
}
