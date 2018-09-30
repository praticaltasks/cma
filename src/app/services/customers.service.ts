import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { CUSTOMERS } from '../constants';
import { isJsonValid } from '../helpers';
import { ICustomer } from '../interfaces/customer.interface';

@Injectable({
    providedIn: 'root',
})
export class CustomersService {
    private notify: ReplaySubject<ICustomer[]>;
    private customers: Array<ICustomer>;

    constructor() {
        this.customers = [];
        this.notify = new ReplaySubject();
    }

    private init(): void {
        const customers = localStorage.getItem(CUSTOMERS);
        this.customers = isJsonValid(customers) ? JSON.parse(customers) : [];
        this.notify.next(this.customers);
    }

    public get(): Observable<any> {
        if (!this.customers) {
            this.init();
        }
        return this.notify.asObservable();
    }

    public add(customer): void {
        if (!customer) {
            return;
        }

        this.customers.push(customer);
        localStorage.setItem(CUSTOMERS, JSON.stringify(this.customers));
        this.notify.next(this.customers);

    }

    public remove(customerToRemove): void {
        const customerIndex = this.customers.findIndex(customer => customer.email === customerToRemove.email);
        if (customerIndex < 0) {
            return;
        }

        this.customers.splice(customerIndex, 1);
        localStorage.setItem(CUSTOMERS, JSON.stringify(this.customers));
        this.notify.next(this.customers);
    }
}
