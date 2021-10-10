import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  navItems = [
    { title: 'الرئيسية', route: '/home' },
    { title: 'الفكرة', route: '/idea' },
    { title: 'من نحن', route: '/who-we-are' },
    { title: ' المعطيات والاحصائيات', route: '/statistics' },
    { title: 'تواصل معنا', route: '/contact-us' },
  ];

  ngOnInit(): void {}
}
