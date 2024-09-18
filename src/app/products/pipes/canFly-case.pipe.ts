import { Pipe, PipeTransform } from "@angular/core";

//hugo | toggleCase = 'HUGO'

@Pipe({
    name: 'canFlyCase'
})
export class CanFlyCasePipe implements PipeTransform{
    transform(value: boolean ): 'vuela' | 'no vuela' {
        
        return value ? 'vuela' : 'no vuela';
    }



}