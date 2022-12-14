import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './/home/home.module';
import { LoginModule } from './/login/login.module';
import { CadastroEnderecoModule } from './cadastro-endereco/cadastro-endereco.module';
import { AgendamentoComponent } from './cadastro/agendamento/tela-agendamento/agendamento.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { AuthGuard } from './estrutura/auth/auth.guard';
import { GaleriaModule } from './galeria/galeria.module';

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
    loadChildren: () => import('./cadastro-endereco/cadastro-endereco.module').then(x => CadastroEnderecoModule),
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(x => CadastroModule),
    canActivate: [AuthGuard]
  },
  {

    path: 'cadastro/agendamento',
    component: AgendamentoComponent
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria.module').then(x => GaleriaModule),
    //canActivate: [AuthGuard]
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
