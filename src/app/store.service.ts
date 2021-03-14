import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _store: { [key: string]: any } = {
    list : []

  }  

  constructor() { }

  get(key: string): any {
    return this._store[key];
  }

}
