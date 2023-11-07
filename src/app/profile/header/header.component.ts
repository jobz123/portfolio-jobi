import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fragment: any;

  arrHeader:any =[
    {name:'About',navigate:'#about'},
    {name:'Experience',navigate:'#experience'},
    {name:'Extra Curricular',navigate:'#extra-curicular'},
    {name:'Skills',navigate:'#skill'},
    {name:'Education',navigate:'#education'},
    
  ]

  constructor(private router: Router) { 
    this.fragment = this.router.url.split('#')[1];
    console.log('hit')
  }

  ngOnInit() {
    console.log('hot')
  }
  
  ngOnChanges(){
    console.log('ddd',this.arrHeader)
  }

  onClickHeader(header:any){
    this.fragment = header;
  }

  
}