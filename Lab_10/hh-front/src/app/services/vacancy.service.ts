import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {


  private apiUrl = 'http://127.0.0.1:8000/api/vacancies/';

  constructor(private http: HttpClient) { }


  getVacanciesByCompanyId(companyId: number): Observable<Vacancy[]> {

    const url = `${this.apiUrl}?companyId=${companyId}`;

    return this.http.get<Vacancy[]>(url);
  }
}
