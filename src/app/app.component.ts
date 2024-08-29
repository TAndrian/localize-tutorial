import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'localize-tutorial';

  constructor(private translate: TranslateService) {
    const userLanguage = navigator.language || 'en';
    const languageCode = userLanguage.split('-')[0];
    this.translate.setDefaultLang(languageCode);
    this.translate.use(languageCode);
  }
}
