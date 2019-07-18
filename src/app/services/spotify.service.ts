import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query:string ){
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCMdcRDpSJU4P86dsN2jxg0jC3n4w1X3ExPHqiPFGVA5Q9bXZKwtVVtPiA-atUopOD1u88b50JS2BMWEUM'
      });

      return this.http.get( url, { headers } );

  };

  getNewReleases(){
      return this.getQuery('browse/new-releases?limit=20')
                 .pipe( map( ( data:any ) => data.albums.items ));
  };
  
  getArtis( artist:string ){
      return this.getQuery(`search?q=${ artist }&type=artist&limit=20`)
                 .pipe( map( data => data['artists'].items ));             
  };

  getArtistId( id:string ) {
      return this.getQuery(`artists/${id}`)
  }

  getTopTracks( id:string ){
      return this.getQuery( `artists/${id}/top-tracks?country=ar` )
                 .pipe( map( data => data['tracks'] ) )
  }

}
