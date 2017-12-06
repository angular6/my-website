import { ModuleWithProviders } from '@angular/core';
import { Homepage } from './pages/homepage';
import { ComponentList } from './pages/component-list';
import { GuideList } from './pages/guide-list';
import { Routes, RouterModule } from '@angular/router';
import { ComponentViewer } from './pages/component-viewer/component-viewer';
import { ComponentCategoryList } from './pages/component-category-list/component-category-list';
import { ComponentSidenav } from './pages/component-sidenav/component-sidenav';

import { KevGa } from './pages/kev-ga/kev-ga';
import { Health } from './pages/health/health';
import { Admin } from './pages/admin/admin';

import { KevGuard } from './kevauth.service';




const _ROUTES: Routes = [
  { path: '', component: Homepage, pathMatch: 'full' },
  {
    path: 'skills',
    component: ComponentSidenav,
    children: [
      { path: '', component: ComponentCategoryList },
      { path: 'category/:id', component: ComponentList },
      { path: 'skill/:id', component: ComponentViewer },
    ],
  },
  { path: 'about-me', component: GuideList },
  { path: 'my_dashboard', component: KevGa, canActivate: [KevGuard] },
  { path: 'health', component: Health, canActivate: [KevGuard] },
  { path: 'admin', component: Admin }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(_ROUTES);
