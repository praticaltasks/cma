import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateModule } from './components/create/create.module';

@NgModule({
    declarations: [
        AppComponent,
        CustomersComponent
    ],
    imports: [
        BrowserModule,
        CreateModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
