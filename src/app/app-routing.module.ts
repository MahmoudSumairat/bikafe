import { StatisticsModule } from './statistics/statistics.module';
import { WhoWeAreModule } from './who-we-are/who-we-are.module';
import { IdeaModule } from './idea/idea.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { IdeaComponent } from './idea/idea.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ContactComponent } from './contact/contact.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'idea',
    component: IdeaComponent,
  },
  {
    path: 'who-we-are',
    component: WhoWeAreComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    IdeaModule,
    WhoWeAreModule,
    StatisticsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
})
export class AppRoutingModule {}
