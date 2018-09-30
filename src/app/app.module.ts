import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
    declarations: [
        AppComponent,
        CustomersComponent
    ],
    imports: [
        BrowserModule,
        AuthModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
