import { CustomersService } from './customers.service';
import { TestBed } from '@angular/core/testing';
import { CUSTOMERS } from '../constants';

describe('CustomersService', () => {
    let customersService: CustomersService;
    const storage = {};

    const mockLocalStorage = {
        getItem: (key: string): string => {
            return key in storage ? storage[key] : null;
        },
        setItem: (key: string, value: string) => {
            storage[key] = `${value}`;
        }
    };

    const customer = {
        fullName: 'James Smith',
        email: 'james@gmail.com',
        address: 'Street 12, Alabama USA'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CustomersService
            ]
        });
        customersService = TestBed.get(CustomersService);

        spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    });

    it('should create Customers service', () => {
        expect(customersService).toBeTruthy();
    });

    it('should be no customers at the start', () => {
        customersService.get();
        expect(localStorage.getItem(CUSTOMERS)).toBe(null);
    });

    it('should retrieve customer after it was added', () => {
        customersService.add(customer);
        expect(localStorage.getItem(CUSTOMERS)).toBe(JSON.stringify([customer]));
    });

    it('should return empty array after customer was removed', () => {
        customersService.add(customer);
        customersService.remove(customer);
        expect(localStorage.getItem(CUSTOMERS)).toBe(JSON.stringify([]));
    });
});
