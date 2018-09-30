import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        ReactiveFormsModule,
        GooglePlaceModule,
    ],
    exports: [
        RegisterComponent
    ]
})
export class AuthModule {}
