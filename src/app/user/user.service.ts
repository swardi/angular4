import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

export interface User {
    id: string;
    name: string;
    age: number;
    salary: number;
}


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  list() : any {
  	return this.http.get('http://localhost:8080/user.json');
  }

  get(id){
  	return this.http.get('api/user/'+id);
  }

  delete(id){
  	return this.http.delete('api/user/'+id);	
  }

  create(user: User){
  	return this.http.post('api/user/', user);	
  }

  update(user: User){
  	return this.http.patch('api/user/', user);	
  }

}
