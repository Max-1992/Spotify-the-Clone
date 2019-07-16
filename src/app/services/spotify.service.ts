import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQB7oPFuFWjeyR3-Dpw09y2U4JDjLRgR-a9YqCYlOpWOheYkMxQOInx8HuE_yaI2DwSQn9SQGwruDhZDnBE'
      })

      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
                      .pipe( map( ( data:any ) => {
                            return data.albums.items
                      }));
  }  
  
  getArtis( artist:string ){
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB7oPFuFWjeyR3-Dpw09y2U4JDjLRgR-a9YqCYlOpWOheYkMxQOInx8HuE_yaI2DwSQn9SQGwruDhZDnBE'
    })
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${ artist }&type=artist&limit=20`, { headers })
                    .pipe( map( data => {
                          return data['artists'].items
                    }))
  
  }

}
