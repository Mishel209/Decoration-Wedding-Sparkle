import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  reloadComponent(self: boolean, urlNavigateTo?: string) {
    console.log("Current route I am on:", this.router.url);

    const url = self ? this.router.url : urlNavigateTo;

    if(!url) {
      console.error('Invalid URL provided');
      return;
    }

    const ifFullUrl = /^https?:\/\//.test(url);

    if (ifFullUrl) {
      window.location.href = url;
    } else {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([url]).then(() => {
          console.log('After navigation I am on: ${this.router.url}');
        });
      });
    }
  }
}
