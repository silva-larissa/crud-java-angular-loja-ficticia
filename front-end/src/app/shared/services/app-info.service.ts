import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Frontend Loja Ficticia';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
