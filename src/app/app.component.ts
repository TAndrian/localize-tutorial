import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './service/translation.service';
import { DropdownModule } from 'primeng/dropdown';
import {
  ReactiveFormsModule,
  FormGroup,
  FormsModule,
  FormBuilder,
} from '@angular/forms';
import { Language } from './utils/models/language';
import { LANGUAGES } from './utils/language-enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, DropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'localize-tutorial';
  languages: Language[] = LANGUAGES;
  defaultLanguage: string = '';
  langForm: FormGroup = new FormGroup({});

  constructor(public translate: TranslationService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.getDefaultLanguage();
    this.handleLanguageChange();
  }

  /**
   * Get user's default language.
   */
  private getDefaultLanguage() {
    this.defaultLanguage = navigator.language;
    this.langForm = this.fb.group({
      selectedLanguage: [this.defaultLanguage],
    });
  }

  /**
   * Handle language changes.
   */
  handleLanguageChange(): void {
    this.langForm.controls['selectedLanguage'].valueChanges.subscribe(
      (language: string) => {
        this.translate.changeLanguage(language);
      }
    );
  }
}
