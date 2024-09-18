import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'hugo';
  public nameUpper: string = 'HUGO';
  public nameTitle: string = 'HuGo HuiChaLaO';

  public customDate: Date = new Date();

}
