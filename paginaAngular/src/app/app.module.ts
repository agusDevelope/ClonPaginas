import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { ResourcesComponent } from './resources/resources.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    DocsComponent,
    BlogComponent,
    EventsComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
