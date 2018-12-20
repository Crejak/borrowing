import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssattr'
})
export class CssattrPipe implements PipeTransform {

  transform(value: number, attr: string, unit: string): string {
    console.log("On appelle le pipe avec " + value);
    console.log(attr + ": " + value + unit + ";");
    return attr + ": " + value + unit + ";";
  }

}
