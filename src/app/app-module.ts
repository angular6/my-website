import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MyApp } from './app';
import { Homepage } from './pages/homepage/homepage';
import { routing } from './routes';
import { ComponentList } from './pages/component-list/component-list';
import { ComponentViewer } from './pages/component-viewer/component-viewer';
import { GuideList } from './pages/guide-list';
import { KevGa } from './pages/kev-ga';
import { Health } from './pages/health';
import { Admin } from './pages/admin';
import { SharedModule } from './shared/shared-module';
import { ComponentCategoryList } from './pages/component-category-list/component-category-list';
import { ComponentSidenav } from './pages/component-sidenav/component-sidenav';
import { Footer } from './shared/footer/footer';
import { ComponentPageTitle } from './pages/page-title/page-title';
import { ComponentPageHeader } from './pages/component-page-header/component-page-header';

import { AngularFireModule } from 'angularfire2';
import { KevGuard } from './kevauth.service';

export const firebaseConfig = {
    apiKey: "AIzaSyAEGcmpK12GHR7Ho1WKyHy6bjY_iSVw2vQ",
    authDomain: "myapp-300b8.firebaseapp.com",
    databaseURL: "https://myapp-300b8.firebaseio.com",
    projectId: "myapp-300b8",
    storageBucket: "myapp-300b8.appspot.com",
    messagingSenderId: "838476483873"
};


@NgModule({
  declarations: [
    MyApp,
    ComponentCategoryList,
    ComponentList,
    ComponentSidenav,
    ComponentViewer,
    ComponentPageHeader,
    GuideList,
    KevGa,
    Health,
    Admin,
    Homepage,
    Footer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    Location,
    ComponentPageTitle,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    KevGuard
  ],
  bootstrap: [MyApp],
})



export class AppModule {}
