import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryUpdateService {
  private updateSubject = new Subject<void>();

  updateHistory() {
    this.updateSubject.next();
  }

  onUpdate() {
    return this.updateSubject.asObservable();
  }
}
