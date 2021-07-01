import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoModule } from "../photo/photo.module";
import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
    declarations: [ PhotoFormComponent ],
    imports: [ CommonModule ]
})
export class PhotoFormModule { }