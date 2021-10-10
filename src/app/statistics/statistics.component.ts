import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  charts = [
    {
      2020: 621,
      2019: 680,
      title: 'اعتداء جنسي',
    },
    {
      2020: 639,
      2019: 419,
      title: 'اعتداء جنسي وكلامي',
    },
  ];

  periodCharts = [
    {
      perc: 0.2,
      title: 'يوم حتى اسبوع',
    },
    {
      perc: 0.3,
      title: 'اسبوع حتى شهر',
    },
    {
      perc: 20,
      title: `شهر حتى
    نصف سنة`,
    },
    {
      perc: 50,
      title: `نصف سنة
    حتى سنة`,
    },
    {
      perc: 21,
      title: `سنة حتى
    خمس سنوات`,
    },
    {
      perc: 2,
      title: `خمس سنوات
    حتى عشر
    سنوات`,
    },
    {
      perc: 0.3,
      title: ` اكثر من عشر سنوات`,
    },
    {
      perc: 1,
      title: ` الاعتداء مستمر`,
    },
    {
      perc: 5,
      title: ` ﻟﻢ يذكر`,
    },
  ];
  idCharts = [
    {
      perc: 7,
      title: 'ﻟﻢ يذكر',
    },
    {
      perc: 0.2,
      title: `معرفة
      سطحية / جار`,
    },
    {
      perc: 4,
      title: `صديق / زميل
      في العمل`,
    },
    {
      perc: 0.3,
      title: `مشغل / ذو
      سلطة`,
    },
    {
      perc: 0.3,
      title: `عم / خال`,
    },
    {
      perc: 64,
      title: `زوج حالي /
      سابق`,
    },
    {
      perc: 0.2,
      title: ` ابن عم/
      ابن خال`,
    },
    {
      perc: 24,
      title: ` الاهل
      (اب/ام/اخ/اخت)`,
    },
  ];

  relationsCharts = [
    {
      title: 'لم يذكر',
      perc: 6,
    },
    {
      title: 'غريب',
      perc: 1,
    },
    {
      title: 'زبون/ مقدم خدمات',
      perc: 0.3,
    },
    {
      title: 'معرفة عن طريق الانترنت',
      perc: 1,
    },
    {
      title: 'زميل في العمل',
      perc: 0.2,
    },
    {
      title: 'مرشد/ معالج/ معلم',
      perc: 1,
    },
    {
      title: 'صاحب سلطة/ مشغل',
      perc: 6,
    },
    {
      title: 'صديق للعائلة',
      perc: 3,
    },
    {
      title: 'جار',
      perc: 2,
    },
    {
      title: 'صديق',
      perc: 19,
    },
    {
      title: 'أحد افراد العائلة',
      perc: 11,
    },
    {
      title: 'زوج الأم',
      perc: 1,
    },
    {
      title: 'ابن عم/ة | ابن خال/ة',
      perc: 14,
    },
    {
      title: 'عم/ خال',
      perc: 6,
    },
    {
      title: 'أخ',
      perc: 11,
    },
    {
      title: 'أب',
      perc: 6,
    },
    {
      title: 'زوج حالي/ سابق',
      perc: 12,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getWidthFactor = () => {
    return window.innerWidth < 768 ? 17 : 50;
  };
}
