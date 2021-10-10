import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navItems = [
    { title: 'الرئيسية', route: '/home' },
    { title: 'الفكرة', route: '/idea' },
    { title: 'من نحن', route: '/who-we-are' },
    { title: ' المعطيات والاحصائيات', route: '/statistics' },
    { title: 'تواصل معنا', route: '/contact-us' },
    { title: 'سياسة الموقع', route: '/site-policy' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
