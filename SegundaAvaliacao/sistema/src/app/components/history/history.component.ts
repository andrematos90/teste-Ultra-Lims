import { Component, OnInit, Input } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { HistoryUpdateService } from 'src/app/services/history-update.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input() results?: any[] = [];
  sortedResults?: any[] = [];

  constructor(private historyUpdateService: HistoryUpdateService) {}

  ngOnInit(): void {
    this.historyUpdateService.onUpdate().subscribe(() => {
      this.updateTable();
    });
    this.updateTable(); // Atualiza a tabela inicialmente
  }

  updateTable() {
    if (this.results) {
      this.sortedResults = [...this.results];
    } else {
      this.sortedResults = [];
    }
  }

  sortData(sort: Sort) {

    if (!this.results) {
      return;
    }

    const data = this.results.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedResults = data;
      return;
    }

    this.sortedResults = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'cep':
          return this.compare(a.cep, b.cep, isAsc);
        case 'localidade':
          return this.compare(a.localidade, b.localidade, isAsc);
        case 'bairro':
          return this.compare(a.bairro, b.bairro, isAsc);
        case 'uf':
          return this.compare(a.uf, b.uf, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
