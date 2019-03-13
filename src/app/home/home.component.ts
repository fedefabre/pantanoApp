import { Component, OnInit } from '@angular/core';
import { CoreServiceService } from '../services/core-service.service';
import _ from 'lodash';

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
  public currentFilterToAdd;
  public and = true;
  loading: boolean;

  constructor(public coreService: CoreServiceService) { }

  ngOnInit() {
    this.coreService.getQuestions().subscribe(data => {
      this.originalQuestions = data;
      this.renderData();
    })
  }

  renderData() {
    this.loading = true;
    const filteredQuestions = this.filter();
    this.currentQuestions = [];
    _.each(filteredQuestions, question => {
      this.currentQuestions.push(question);
    })
    this.loading = false;
  }

  addFilter() {
    this.filters.push(this.currentFilterToAdd);
    this.currentFilterToAdd = '';
    this.renderData();
  }

  removeFilter(filter) {
    var index = this.filters.indexOf(filter);
    if (index !== -1) {
      this.filters.splice(index, 1);
    }
    this.renderData();
  }

  onKey(event: any) { // without type info
    this.currentFilterToAdd = event.target.value;
  }

  toggleAndOr(){
    this.and = !this.and;
    this.renderData();
  }

  private filter() {
    return _.filter(this.originalQuestions, row => {
      if(!this.and){
        if (this.filters.length > 0) {
          return _.some(this.filters, filter => {
            return new RegExp("\\b"+filter.toLowerCase()+"\\b").test(row.question.toLowerCase());
          })
        } else {
          return true;
        }
      }else{
        return _.every(this.filters, filter => {
          return new RegExp("\\b"+filter.toLowerCase()+"\\b").test(row.question.toLowerCase());
        })
      }
    });
  }

}
