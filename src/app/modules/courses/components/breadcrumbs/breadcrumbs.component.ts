
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;
ngOnInit() {
  this.items = [{ label: 'Курсы' }];
  this.home = { icon: 'pi pi-home',  routerLink: '/' ,};
}
}
