import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localization';

  constructor(private translate: TranslateService) {
      // testing for type script
      console.log(translate.data['master-title']);
  }
}
