import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

user = signal<string | null >(localStorage.getItem('user'));

login(name: string, pass?: string): boolean {
  if (name.toLowerCase().trim() === 'admin') {
    if (pass === 'admin') {
      this.user.set('admin');
      localStorage.setItem('user', 'admin');
      return true;
    }
    return false;
  } else if (name.trim() !== '') {
    this.user.set(name);
    localStorage.setItem('user', name);
    return true;
  }
  return false;
}

  logout(){
    this.user.set(null);
    localStorage.removeItem('user');
  }
  isAdmin(): boolean{
    return this.user() === 'admin';
  }

  isLogged(): boolean{
    return !!this.user();
  }
}
