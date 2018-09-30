import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        ReactiveFormsModule,
        GooglePlaceModule,
    ],
    exports: [
        CreateComponent
    ]
})
export class CreateModule {}
