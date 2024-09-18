import { Pipe, PipeTransform } from "@angular/core";

//hugo | toggleCase = 'HUGO'

@Pipe({
    name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{
    transform(value: string, toUpper: boolean = false): string {
        
        return (toUpper) ? value.toUpperCase()
        : value.toLocaleLowerCase();
    }



}