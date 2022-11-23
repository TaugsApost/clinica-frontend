import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './/home/home.module';
import { LoginModule } from './/login/login.module';
import { CadastroModule } from './/cadastro-endereco/cadastro.module';
import { AuthGuard } from './estrutura/auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(x => HomeModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(x => LoginModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cadastro-endereco',
    loadChildren: () => import('./cadastro-endereco/cadastro.module').then(x => CadastroModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
