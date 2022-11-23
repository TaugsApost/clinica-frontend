import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../estrutura/auth/auth.guard";
import { LoginComponent } from "./tela-login/login.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }