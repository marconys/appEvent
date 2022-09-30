import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  connectApi(dados: { requisicao: string; id_usuario: number; limit: number; start: number; }, arg1: string) {
    throw new Error('Method not implemented.');
  }
  server: string = "http://localhost/api/"
  constructor(private http: HttpClient) { }
  dadosApi(dados:any,nomeApi: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-type':'application/json'})
    }
    let url = this.server + nomeApi;
    return this.http.post(url, JSON.stringify(dados),httpOptions).map(res => res);
  }
}
