import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterEventEmitter = new EventEmitter<string>();
  professions = ["NO_FILTER", "ADMINISTRATION", "ECONOMICS_FINANCE_AND_INSURANCE", "ELECTRICAL_ENGINEERING_AND_TELECOMMUNICATIONS", "MEDICINE", "ARCHITECTURE_CONSTRUCTION_AND_GEODESY"];
  onPickFilter(value: any) {
    this.filterEventEmitter.emit(value.target.value);
  }
}
