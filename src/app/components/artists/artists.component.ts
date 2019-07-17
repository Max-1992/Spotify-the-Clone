import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {

  constructor( private activatedroute: ActivatedRoute ) {

      this.activatedroute.params.subscribe( params => console.log( params[ 'id' ] ) )

   }

 
  
}
