import { products } from './../produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proctudit-list',
  templateUrl: './proctudit-list.component.html',
  styleUrls: ['./proctudit-list.component.css']
})
export class ProctuditListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('O produto foi compartilhado!');
  }

  onNotify(){
    window.alert('Você será notificado quando o produto for colocado à venda');
  }



}
