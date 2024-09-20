import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaviconService {

  constructor() { }

  setFavicon(faviconUrl: string) {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.type = 'image/x-icon';
    link.href = faviconUrl;
  }

  setTitle(title: string): void {
    document.title = title;
  }

}
