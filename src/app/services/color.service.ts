import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44342/api/colors/getall";

  constructor(private httpClient: HttpClient) { }

getColors():Observable<ColorResponseModel>{

  return this.httpClient.get<ColorResponseModel>(this.apiUrl);
}



}
