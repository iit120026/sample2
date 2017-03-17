import { Http,Response} from "@angular/http"; 
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SpaceService {

  constructor(private http:Http) { }


getSpaces() { 
	return this.http .get('http://localhost:3000/api/spaces' ) 
	.map((response: Response) => response.json()); 
}
}
