import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    private geocoder: google.maps.Geocoder;

    constructor() {
        this.geocoder = new google.maps.Geocoder();
    }

    public check(address): Observable<any> {
        return new Observable(observer => {
            this.geocoder.geocode({address}, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                } else {
                    observer.error('Invalid address');
                }
                observer.complete();
            });
        });
    }
}
