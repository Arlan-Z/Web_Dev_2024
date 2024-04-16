import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  @Input()
  companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancyService.getVacanciesByCompanyId(this.companyId).subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }
}