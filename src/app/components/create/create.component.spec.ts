import { async, TestBed } from '@angular/core/testing';
import { CreateComponent } from './create.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressService } from '../../services/address.service';
import { of } from 'rxjs';

class MockAddressService {
    check() {}
}

describe('Create component', () => {
    let createComponent: CreateComponent;
    let addressService: AddressService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                ReactiveFormsModule
            ],
            declarations: [
                CreateComponent
            ],
            providers: [
                CreateComponent,
                { provide: AddressService, useClass: MockAddressService }
            ]
        }).compileComponents();

        createComponent = TestBed.get(CreateComponent);
        addressService = TestBed.get(AddressService);
        spyOn(addressService, 'check').and.returnValue(of([]));
    }));

    it('should successfully create component', () => {
        const fixture = TestBed.createComponent(CreateComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create from on init', () => {
        createComponent.ngOnInit();
        expect(createComponent.form instanceof FormGroup).toBe(true);
    });

    it('should not check address if all fields are not filled', () => {
        const formData = {
            fullName: 'Test',
            email: 'aaa@bbb.com'
        };
        createComponent.ngOnInit();
        createComponent.form.patchValue(formData);
        createComponent.onSubmit();
        expect(addressService.check).not.toHaveBeenCalled();
    });

    it('should check address if all fields are filled', () => {
        const formData = {
            fullName: 'Test',
            email: 'aaa@bbb.com',
            address: {
                street: 'Test',
                buildingNumber: '12',
                city: 'Test',
                zipCode: '00000'
            }
        };
        createComponent.ngOnInit();
        createComponent.form.patchValue(formData);
        createComponent.onSubmit();
        expect(addressService.check).toHaveBeenCalled();
    });
});
