import { Component, OnInit } from '@angular/core';
import { CoreServiceService } from '../services/core-service.service';
import _ from 'lodash';

export interface CategoriesInterface {
  id: number,
  value: string,
  description: string,
  keywords: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [CoreServiceService]
})
export class HomeComponent implements OnInit {

  private originalQuestions = {};
  public filters = [];
  public currentQuestions = [];
  public currentFilterToAdd = '';
  public loading: boolean;
  public model: any = {};
  public categoryActive: CategoriesInterface;

  // TODO: get categories from BE
  public categories: CategoriesInterface[] = [
    { id: 0, value: 'all', description: 'Todas', keywords: [] },
    { id: 1, value: 'fechas', description: 'Fechas', keywords: ['año', 'mes', 'dia', 'dias'] },
    { id: 2, value: 'medidas', description: 'Medidas', keywords: ['metro', 'metros', 'londitud', 'profundidad'] },
    { id: 3, value: 'personajes', description: 'Personajes', keywords: [] },
    { id: 4, value: 'mundi', description: 'Mundi', keywords: [] }
  ]

  constructor(public coreService: CoreServiceService) { }

  ngOnInit() {
    this.loading = true;
    // Set all as default category
    this.categoryActive = this.categories[0];
    this.coreService.getQuestions().subscribe(data => {
      this.originalQuestions = data;
      this.renderData();
    })
  }

  renderData() {
    this.loading = true;
    const filteredQuestions = this.filter();
    this.currentQuestions = [];
    _.each(filteredQuestions, question => this.currentQuestions.push(question))
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  addFilter() {
    this.loading = true;
    this.filters.push(this.currentFilterToAdd);
    this.currentFilterToAdd = '';
    this.model.newFilter = '';
    this.renderData();
  }

  submitForm() {
    this.currentFilterToAdd = this.model.newFilter;
    this.addFilter();
  }

  removeFilter(filter) {
    this.loading = true;
    var index = this.filters.indexOf(filter);
    if (index !== -1) {
      this.filters.splice(index, 1);
    }
    this.renderData();
  }

  categoryFilter(category) {
    this.clearFilters();
    this.categoryActive = category;
    if (category === 'all') {
      this.clearFilters();
    }
  }

  clearFilters() {
    this.loading = true;
    this.filters = [];
    this.renderData();
  }

  private filter() {
    return _.filter(this.originalQuestions, row => {
      if (this.filters.length > 0) {
        return _.some(this.filters, filter => {
          return new RegExp("\\b" + filter.toLowerCase() + "\\b").test(row.question.toLowerCase());
        })
      } else {
        return true;
      }
    });
  }

}