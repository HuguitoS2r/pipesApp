import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  
  //i18n select
  public name: string = 'Hugo';
  public gender: 'male' | 'female'= 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural

  public clients: string[]= ['Maria', 'Fernando', 'Natalia', 'Hugo', 'Olivia', 'Rosana', 'Zeko']

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient():void{
    this.clients.shift();
  }

  //Key value Pipe
  public person = {
    name: 'Hugo',
    age: 24,
    address: 'Stgo, Chile'

  }

  //Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue:Promise<string> = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve('Tenemos data en la promesa')
  }, 3500));
}
