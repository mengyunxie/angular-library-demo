import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Library';
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  tabSideMenu(routeUrl): void {
  this.router.navigate([routeUrl], { relativeTo: this.activatedRoute });
  }
}
