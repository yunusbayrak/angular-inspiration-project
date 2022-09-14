import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.seoService.setMetaTitle(
      'Dashboard - Angular Inspiration Project | Angular v14'
    );
    this.seoService.addMetaTag({
      name: 'author',
      content: 'Yunus Bayrak',
    });
    this.seoService.setMetaTag({
      name: 'description',
      content:
        'Angular v14.2.1 Inspiration Project that support Routing, Lazy Loading, Module Speration, SSR and PWA',
    });
  }
}
