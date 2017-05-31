import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class StorageService {
    private static readonly LOGINS_STORAGE_KEY: string = 'logins';

    getLogins(): string[] {
        return this.getItem(StorageService.LOGINS_STORAGE_KEY) || [];
    }

    setLogins(logins: string[]): void {
        this.setItem(StorageService.LOGINS_STORAGE_KEY, logins);
    }

    private getItem(key: string): any {
        const raw = localStorage.getItem(key);

        if (typeof raw !== 'string') return;

        return JSON.parse(raw);
    }

    private setItem(key: string, value: any): void {
        const stringifiedValue = JSON.stringify(value);

        localStorage.setItem(key, stringifiedValue);
    }
}