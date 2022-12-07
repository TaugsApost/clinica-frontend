import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../estrutura/auth/auth.guard";
import { AgendamentoComponent } from "./agendamento/agendamento.component";
import { FuncionarioComponent } from "./funcionario/funcionario.component";
import { PacienteComponent } from "./paciente/tela-paciente/paciente.component";

const routes: Routes = [
    {
        path: 'agendamento',
        component: AgendamentoComponent
    },
    {
        path: 'funcionario',
        component: FuncionarioComponent
    },
    {
        path: 'paciente',
        component: PacienteComponent
    },
    {
        path: '',
        redirectTo: 'agendamento',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroRoutingModule {

}