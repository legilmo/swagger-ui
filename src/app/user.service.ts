import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';

export class User{
  constructor(
    public id:number,
    public firstName:string,
    public lastName:string,
  ) {}
}

@Injectable({ 
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  list() {
    //return this.http.get<any[]>('${this.usersUrl}');
    return this.httpClient.get<any[]>('http://localhost:8090/v1/user/list');
  }

  public getById(id:string) {
    return this.httpClient.get<User>("http://localhost:8090/v1/user/show" + "/"+ id);
  }

  public deleteUser(user) {
    return this.httpClient.delete<User>("http://localhost:8090/v1/user/delete" + "/"+ user.id);
  }

  public updateUser(user) {
     return this.httpClient.put<User>("http://localhost:8090/v1/user/update" + "/"+ user.id, user);
  }

  public addUser(user:User) {
    return this.httpClient.post<User>("http://localhost:8090/v1/user/add", user);
  }




}
