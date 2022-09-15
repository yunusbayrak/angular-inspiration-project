import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './modules/application/company/company.component';
import { DashboardComponent } from './modules/application/dashboard/dashboard.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'company',
    loadChildren: () =>
      import('./modules/application/company/company.module').then(
        mod => mod.CompanyModule
      ),
  },
  { path: 'company/:id', component: CompanyComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/general/login/login.module').then(
        mod => mod.LoginModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/general/signup/signup.module').then(
        mod => mod.SignupModule
      ),
  },
  {
    path: 'standalone',
    loadComponent: () =>
      import('./modules/application/standalone/standalone.component').then(
        mod => mod.StandaloneComponent
      ),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./modules/application/comments/comments.module').then(
        mod => mod.CommentsModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
