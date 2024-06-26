import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown-language',
  templateUrl: './dropdown-language.component.html',
  styleUrls: ['./dropdown-language.component.scss']
})
export class DropdownLanguageComponent implements OnInit  {
  constructor(private translate : TranslateService) {
    translate.setDefaultLang('sr')
  }



  switchLanguage(language: string) {
    this.translate.use(language);
  }


  ngOnInit() {}
}


