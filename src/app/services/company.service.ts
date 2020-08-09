import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  getCompanyInfo() {
    return {
      name: 'Chattha Ltd',
      address: '123 UK',
    };
  }
}
