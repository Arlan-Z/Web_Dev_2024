import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId!: number; // Use non-null assertion operator

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  showVacancies(companyId: number): void {
    this.selectedCompanyId = companyId;
  }
}
