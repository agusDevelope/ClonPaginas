import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FeaturesComponent} from './features/features.component';
import {DocsComponent} from './docs/docs.component';
import {ResourcesComponent} from './resources/resources.component';
import {EventsComponent} from './events/events.component';
import {BlogComponent} from './blog/blog.component';

// import{}from''
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'blog', component: BlogComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
