import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path:'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: 'index' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
