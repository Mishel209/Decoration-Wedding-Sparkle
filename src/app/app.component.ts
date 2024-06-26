import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('sr');

  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  title = 'Dekoracija-Wedding-Sparkle';
  getAttribute: any;




  ngOnInit() {
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = this.getAttribute('routerLink').subscribe(1);
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth'
        });
      });
    })
  }
}
