import { AddressService } from './address.service';
import { TestBed } from '@angular/core/testing';

describe('AddressService', () => {
    let addressService: AddressService;

    function mockGoogleService() {
        window['google'] = {
            maps: {
                Geocoder: class {}
            }
        };
    }

    beforeEach(() => {
        mockGoogleService();

        TestBed.configureTestingModule({
            providers: [
                AddressService
            ]
        });

        addressService = TestBed.get(AddressService);
    });

    it('should create Address service', () => {
        expect(addressService).toBeTruthy();
    });
});
