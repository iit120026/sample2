import { environment } from './../environments/environment';
import { Http,Response} from "@angular/http"; 
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SpaceService {

  constructor(private http:Http) { }
baseUrl:any=environment.host;

getSpaces() { 
	return this.http .get(this.baseUrl+'/api/spaces' ) 
	.map((response: Response) => response.json()); 
}
}
