import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ICustomer } from '../../interfaces/customer.interface';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    public customers: Array<ICustomer>;

    constructor(private customersService: CustomersService) {
        this.customers = [];
    }

    ngOnInit(): void {
        this.customersService.get().subscribe(customers => {
            this.customers = customers;
        });
    }

    deleteCustomer(customer): void {
        this.customersService.remove(customer);
    }
}
