import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from './user.model';

@Injectable()
export class UserService {
    private static readonly baseApiUrl: string = 'https://api.github.com/users';

    constructor(private http: Http) { }

    get(login: string): Observable<User> {
        return this.http.get(`${UserService.baseApiUrl}/${login}`)
            .map(response => response.json());
    }
}