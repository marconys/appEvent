import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-add-eventos',
  templateUrl: './add-eventos.page.html',
  styleUrls: ['./add-eventos.page.scss'],
})
export class AddEventosPage implements OnInit {
  id: number;
  nome:string ="";
  data:string  ="";
  capacidade:string  ="";
  usuarios_id:number = null;
  constructor(private service: PostService ,
    private router: Router,
    private actRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((dadosdarota:any)=>{
      this.id = dadosdarota.id;
      this.nome = dadosdarota.nome;
      this.data = dadosdarota.data;
      this.capacidade = dadosdarota.capacidade;
      this.usuarios_id = dadosdarota.usuarios_id;
    });
  }
  cadastrar(){
    return new Promise(res =>{
     let dados = {
       requisicao:'addevent',
       nome:this.nome,
       data:this.data,
       ativo:1,
       capacidade:this.capacidade,
       usuarios_id:this.usuarios_id
     }
     //console.log(dados);
     this.service.dadosApi(dados, "api_evento.php").subscribe(data=>{
      console.log(data);
       if(data['success']){
        this.router.navigate(['eventos']);
         this.id=null;this.nome="";this.data="";this.capacidade="";this.usuarios_id=null;
       }
     });
    });
   }
   editar(){
    return new Promise(ret=>{
      let dados = {
        requisicao:'editarevent',
        nome: this.nome,
        data:this.data,
        capacidade:this.capacidade,
        usuarios_id:this.usuarios_id,
        id:this.id
      };
      this.service.dadosApi(dados,"api_evento.php").subscribe(data=>{
        if(data['success']){
          this.router.navigate(['eventos']);
        }
      });
    });
  }

}
