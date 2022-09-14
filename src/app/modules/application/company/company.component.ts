import { isPlatformBrowser, Location } from '@angular/common';
import { APP_ID, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/services/seo/seo.service';
import { CompanyService } from './company.service';

const STATE_KEY_USERS = makeStateKey('usersList');
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  loaded: boolean;
  // users = this.state.get(STATE_KEY_USERS, <any>[]);
  users: any;
  selectedUser?: any;
  onSelectUser(c: any): void {
    this.selectedUser = c;
  }
  constructor(
    private state: TransferState,
    private route: ActivatedRoute,
    private location: Location,
    private seoService: SeoService,
    private companyService: CompanyService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    this.loaded = false;
    this.getUsers();
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.selectedUser = this.users.find((x: any) => x.id === id);
    }
  }

  getUsers(): void {
    this.loaded = false;
    this.companyService
      .getItems('https://jsonplaceholder.typicode.com/comments')
      .subscribe(items => {
        const platform = isPlatformBrowser(this.platformId)
          ? 'in the browser'
          : 'on the server';
        console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
        this.users = items;
        this.loaded = true;
      });
  }

  getUsersSsr(): void {
    this.loaded = false;
    if (!isPlatformBrowser(this.platformId)) {
      this.companyService
        .getItems('https://jsonplaceholder.typicode.com/comments')
        .subscribe(users => {
          const platform = isPlatformBrowser(this.platformId)
            ? 'in the browser'
            : 'on the server';
          console.log(
            `getUsers : Running ${platform} with appId=${this.appId}`
          );
          this.state.set(STATE_KEY_USERS, <any>users);
          this.loaded = true;
        });
    } else {
      console.log(
        `getUsers : Run on ${this.platformId} with appId=${this.appId}`
      );
      this.loaded = true;
    }
  }

  resetUsers(): void {
    this.users = null;
    this.loaded = true;
  }
}
