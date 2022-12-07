import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from './tela-cadastro/cadastro.component';


const routes: Routes = [
    {
        path: '',
        component: CadastroComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroEnderecoRoutingModule { }