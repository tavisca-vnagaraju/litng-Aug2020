import { Component } from '@angular/core';
import {ModelClass} from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   model: ModelClass;
   models: Array<ModelClass>;
   constructor(){
     this.model = new ModelClass(0, '');
     this.models = new Array<ModelClass>();
   }
   clear=()=>{
    this.model = new ModelClass(0, '');
   }
   save=()=>{
     this.models.push(this.model);
     let element = document.querySelector('simple-element');
     // element.records = this.models;
      element.getValues(this.models);
     // element.view = JSON.stringify(this.models);
   //  alert(`For Lit Elements ${JSON.stringify(element.records)}`);

   }
}
