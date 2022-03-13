import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';


@Injectable({
    providedIn: 'root',
})

export class FinderService {

    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {

    }

    find(search: string) {
        return this.http.get<Product[]>(`${this.apiUrl}/products`, { params: { search }})
    }

}