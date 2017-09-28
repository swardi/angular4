import { Injectable } from '@angular/core';


export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}


@Injectable()
export class ProductService {

  constructor() { }

}
