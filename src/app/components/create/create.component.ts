import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent {
    public form: FormGroup;
    public hasFormErrors: boolean;

    constructor(
        private addressService: AddressService,
        private customersService: CustomersService,
        fb: FormBuilder
    ) {
        this.form = fb.group({
            fullName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            address: fb.group({
                street: ['', [Validators.required]],
                buildingNumber: ['', [Validators.required]],
                city: ['', [Validators.required]],
                zipCode: ['', [Validators.required]]
            })
        });

        this.hasFormErrors = false;
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.hasFormErrors = true;
            return;
        }
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
