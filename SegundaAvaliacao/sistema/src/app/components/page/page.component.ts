import { Component } from '@angular/core';
import { SearchCepService } from '../../services/search-cep.service'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  cepSent: string = '';
  address: any;
  cepValid: boolean = true;
  previousAppointments: any[] = [];
  show:boolean = true;


  constructor(private searchCepService : SearchCepService) {

  }


  getAddress() {

    if (this.cepSent.length === 8 && /^\d+$/.test(this.cepSent)) {
      this.cepValid = true;
      this.searchCepService.getAddressService(this.cepSent)
        .subscribe((data) => {
          this.address = data;
          this.previousAppointments.push(data);

        });
    } else {
      this.cepValid = false;
    }
  }

}
