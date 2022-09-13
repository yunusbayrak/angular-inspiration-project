import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  loaded: boolean;
  users: any;
  selectedUser?: any;
  onSelectUser(c: any): void {
    this.selectedUser = c;
  }
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private companyService: CompanyService
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
        this.users = items;
        this.loaded = true;
      });
  }

  resetUsers(): void {
    this.users = null;
    this.loaded = true;
  }
}
