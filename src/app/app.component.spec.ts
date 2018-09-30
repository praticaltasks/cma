import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MockComponent } from 'ng-mocks';
import { CreateComponent } from './components/create/create.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MockComponent(CreateComponent),
                MockComponent(CustomersComponent)
            ],
            imports: [
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
