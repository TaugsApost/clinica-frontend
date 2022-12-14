import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../estrutura/auth/auth.guard";
import { AgendamentoComponent } from "./agendamento/tela-agendamento/agendamento.component";
import { FuncionarioComponent } from "./funcionario/tela-funcionario/funcionario.component";
import { PacienteComponent } from "./paciente/tela-paciente/paciente.component";

const routes: Routes = [
    {
        path: 'funcionario',
        component: FuncionarioComponent
    },
    {
        path: 'paciente',
        component: PacienteComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroRoutingModule {

}