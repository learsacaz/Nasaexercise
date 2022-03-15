import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nasaService: NasaService) {}
  ngOnInit(): void {
      this.getApod();
  }
  getApod (){
    this.nasaService.getApod().subscribe((nasa: any)=>{
      this.data=nasa;
      console.log(this.data)
    })
  }
  data:any;
}
