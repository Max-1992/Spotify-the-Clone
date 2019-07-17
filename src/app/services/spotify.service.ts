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
        'Authorization': 'Bearer BQCSTRXAYNgILM4tk16J5nZzjMZfFb5jUN3mfhuB6CILUknCxfoHtTlKflg20uzPPDrYA4kmU7-F6FdX1Q0'
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

}
