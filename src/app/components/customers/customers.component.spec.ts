import { async, TestBed } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
import { CustomersService } from '../../services/customers.service';
import { of } from 'rxjs';

class MockCustomersService {
    get() {}
}

describe('Customers component', () => {
    let customersService: CustomersService;
    let component: CustomersComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CustomersComponent
            ],
            providers: [
                CustomersComponent,
                { provide: CustomersService, useClass: MockCustomersService }
            ]
        }).compileComponents();

        customersService = TestBed.get(CustomersService);
        component = TestBed.get(CustomersComponent);
        spyOn(customersService, 'get').and.returnValue(of([]));
    }));

    it('should successfully create component', () => {
        const fixture = TestBed.createComponent(CustomersComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should get customers on ngOnInit', () => {
        component.ngOnInit();
        expect(customersService.get).toHaveBeenCalled();
    });
});
