import {  Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HideService {

  isVisible: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.url);
      }
    });
  }

  private checkRoute(url: string) {
    const hideRoutes = ['/panel'];

    this.isVisible = !hideRoutes.includes(url);

}

}
