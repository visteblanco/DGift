import { Pipe, PipeTransform } from '@angular/core';
import { Dona } from '../interfaces/dona.interface';

@Pipe({
  name: 'donaImage'
})
export class DonaImagePipe implements PipeTransform {

  transform(dona: Dona ): string {
    if(!dona.id && !dona.alt_img){
      return 'assets/no-image.png';
    }
    if(dona.alt_img) return dona.alt_img;

    return `assets/donas/${ dona.id}.jpg`
   }

}
