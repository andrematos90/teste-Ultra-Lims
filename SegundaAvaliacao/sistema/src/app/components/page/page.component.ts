import { Component } from '@angular/core';
import { SearchCepService } from '../../services/search-cep.service'
import { HistoryUpdateService } from 'src/app/services/history-update.service';

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
  show: boolean = true;
  cepNotFound: boolean = false;


  constructor(
    private searchCepService: SearchCepService,
    private historyUpdateService: HistoryUpdateService) { }


    getAddress() {
      this.cepNotFound = false; // Resetando a flag de CEP não encontrado

      if (this.cepSent.length === 8 && /^\d+$/.test(this.cepSent)) {
        this.cepValid = true;
        this.searchCepService.getAddressService(this.cepSent)
          .subscribe(
            (data) => {
              if (data.erro === true) {
                this.cepNotFound = true; // Definindo a flag de CEP não encontrado como verdadeira
              } else {
                this.address = data;
                this.previousAppointments.push(data);
                this.historyUpdateService.updateHistory();
              }
            },
            (error) => {
              console.error('Erro ao consultar o serviço de busca de CEP:', error);
              // Aqui você pode lidar com erros de comunicação com o serviço, por exemplo
            }
          );
      } else {
        this.cepValid = false;
      }
    }
}
