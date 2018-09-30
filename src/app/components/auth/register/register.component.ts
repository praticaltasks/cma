import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../../services/customers.service';
import { AddressService } from '../../../services/address.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    form: FormGroup;

    constructor(
        private addressService: AddressService,
        private customersService: CustomersService,
        fb: FormBuilder
    ) {
        this.form = fb.group({
            fullName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            address: fb.group({
                street: ['', [Validators.required]],
                buildingNumber: ['', [Validators.required]],
                city: ['', [Validators.required]],
                zipCode: ['', [Validators.required]]
            })
        });
    }

    onSubmit(): void {
        const addressForm = this.form.get('address').value;
        const address = `${addressForm['street']} ${addressForm['buildingNumber']}, ${addressForm['city']} ${addressForm['zipCode']}`;
        this.addressService.check(address)
            .subscribe(() => {
                const form = { ...this.form.value };
                form['address'] = address;

                this.customersService.add(form);

                this.form.reset();
            }, error => alert(error));
    }
}
