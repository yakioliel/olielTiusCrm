import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  icon: string;
  link: string;
  isActive: Boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'customers',
      icon: 'bi bi-people-fill',
      link: 'customers',
      isActive: true,
    },
    {
      title: 'contacts',
      icon: 'bi bi-person-lines-fill',
      link: 'contacts',
      isActive: true,
    },
    { title: 'leads', icon: 'bi bi-cart4', link: 'leads', isActive: true },
    {
      title: 'reports',
      icon: 'bi bi-bar-chart-line-fill',
      link: 'reports',
      isActive: false,
    },
    {
      title: 'integrations',
      icon: 'bi bi-layers-fill',
      link: 'integrations',
      isActive: false,
    },
    {
      title: 'year-end sale',
      icon: 'bi bi-emoji-sunglasses-fill',
      link: 'year-end-sale',
      isActive: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
