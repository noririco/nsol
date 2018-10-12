import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of } from "rxjs";
import {User} from "../model/user.model";




@Injectable()
export class AuthService {

    constructor(private http:HttpClient) {}

    //NOTE: toggle this when using login from static
    login(email:string, password:string): Observable<User> {
        if(email == "nsn@nsnsolutions.com"  && password == 'test')
        return of({id:"1", email:'nsn@nsnsolutions.com'});
    }

    //NOTE: toggle this when using login from the node.js server
    // login(email:string, password:string): Observable<User> {
    //     return this.http.post<User>('/api/login', {email,password});
    // }

}
