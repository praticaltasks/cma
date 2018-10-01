import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GooglePlaceModule,
    ],
    exports: [
        CreateComponent
    ]
})
export class CreateModule {}
