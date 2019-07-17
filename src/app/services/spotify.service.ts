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
        'Authorization': 'Bearer BQBiOwAnTbCp2Sxhgn1t491TNqYOw-r_Cmoozrf0x-G9LTDjFlSXGf2SzzJodDd3n93VuuD35OqL8PbsOSA'
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
