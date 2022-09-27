import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-eventos',
  templateUrl: './mostrar-eventos.page.html',
  styleUrls: ['./mostrar-eventos.page.scss'],
})
export class MostrarEventosPage implements OnInit {
  id:number;
  nome:string='';
  data:string='';
  capacidade:string=''
    constructor(
     private actRoute: ActivatedRoute
    ) { }
  
    ngOnInit() {
      this.actRoute.params.subscribe((veionarota:any)=>{
        this.id = veionarota.id;
        this.nome = veionarota.nome;
        this.data = veionarota.data;
        this.capacidade = veionarota.capacidade;
      });
    }

}
