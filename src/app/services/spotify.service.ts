import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor( private http: HttpClient ) { }

  getNewReleases(){
    
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBxF_p76RhVfgsPwLm5utCQbbr4itswfohTqbbriIeNEca8Ky7P_soA90AfmP3jA6bmjqYDbdtyDQ5dx_4'
      })


      this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
                .subscribe( data => {
                  console.log(data);
                })
  }

}
