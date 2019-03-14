import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Login
  login(user) {
    this.http.post(`${this.base}/user/signin`, user)
  }
  // Singup
  signup(user) {
    this.http.post(`${this.base}/user/signup`, user)
  }
  // View single page
  findUser(id) {
    this.http.get(`${this.base}/user/${id}`)
  }
  // Update
  updateUser(id, user) {
    this.http.put(`${this.base}/user/edit/${id}`, user)
  }
  // Delete
  deleteUser(id) {
    this.http.delete(`${this.base}/user/delete/${id}`)
  }
  // Delete (admin)
  adminDeleteUser(id) {
    this.http.delete(`${this.base}/user/delete/${id}/admin`)
  }
}
