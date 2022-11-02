import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "../app.component";
import { PrimengModule } from "../utils/primeng/primeng.module";
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        CabecalhoComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        ReactiveFormsModule,
    ],
    exports: [
        CabecalhoComponent,
        FooterComponent
    ]

})
export class EstruturaModule { }