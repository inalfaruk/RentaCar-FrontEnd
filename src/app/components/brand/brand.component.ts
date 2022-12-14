import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  brandResponseModel:BrandResponseModel={
    data:this.brands,
    message:"",
    success:true

  }
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }


  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      return this.brands=response.data;
    })
  }
}
