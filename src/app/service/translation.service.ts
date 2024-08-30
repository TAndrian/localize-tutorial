import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translationService: TranslateService) {
    this.initializeTranslation();
  }

  /**
   * Get browser language then translate all contents in the entire app.
   */
  private initializeTranslation(): void {
    const userLanguage = navigator.language || 'en';
    const languageCode = userLanguage.split('-')[0];
    this.translationService.setDefaultLang(languageCode);
    this.translationService.use(languageCode);
  }
}
