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
  cepValido: boolean = true;

  constructor(private searchCepService : SearchCepService) {}

  getAddress() {

    if (this.cepEnviado.length === 8 && /^\d+$/.test(this.cepEnviado)) {
      this.cepValido = true;
      this.searchCepService.getAddressService(this.cepEnviado)
        .subscribe((data) => {
          this.address = data;
        });
    } else {
      this.cepValido = false;
    }
  }
}
