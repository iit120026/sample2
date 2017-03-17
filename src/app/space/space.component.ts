import { Response } from '@angular/http';
import { SpaceService } from './../space.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space',
  template: `
    <div *ngFor="let space of spaces">
      <h1>{{space?.name}}</h1>
    </div>
  `,
  styles: []
})
export class SpaceComponent implements OnInit {
  spaces:any;
  constructor(private spaceService:SpaceService) { }

  ngOnInit() {
    this.spaceService.getSpaces().subscribe(
      (data:Response)=>{
          this.spaces=data;
          console.log(data);
      });
  }

}
