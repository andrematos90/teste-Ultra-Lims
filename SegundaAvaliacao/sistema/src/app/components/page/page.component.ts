import { Component } from '@angular/core';
import { SearchCepService } from '../../services/search-cep.service'


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  cepEnviado: string = '';
  address: any;

  constructor(private searchCepService : SearchCepService) {}

  getAddress() {
    console.log("chegou")
    if (this.cepEnviado.length === 8) {
      this.searchCepService.getAddressService(this.cepEnviado)
        .subscribe((data) => {
          this.address = data;
          console.log(this.address)
        });
    }
  }
}
