import { Injectable } from '@angular/core';

declare let window: Window;

const STORAGE_KEY_PREFIX = 'beers_app_storage_';

@Injectable()
export class LocalStorageService {

  private storage: Storage;

  constructor () {
    this.storage = window.localStorage;
  }

  public get (key: string): any {
    const value = this.storage.getItem(this.getKey(key));

    return JSON.parse(value);
  }

  public set (key: string, value: any) {
    const stringifedValue = JSON.stringify(value);

    this.storage.setItem(this.getKey(key), stringifedValue);
  }

  public remove (key: string) {
    this.storage.removeItem(this.getKey(key));
  }

  public clear () {
    this.storage.clear();
  }

  private getKey (key: string): string {
    return `${STORAGE_KEY_PREFIX}${key}`;
  }

}
