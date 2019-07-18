import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domsanitizer: DomSanitizer ) {}

  transform(value:string, id:string):any {
      
      let url:string = `${value}${id}`;
      
      console.log( url );
      return this.domsanitizer.bypassSecurityTrustResourceUrl( url );
      
  }

}
