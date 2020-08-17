import {LitElement, html, css, property, customElement} from 'lit-element';

@customElement('simple-element')
export class SimpleElement extends LitElement  {
    [x: string]: any;
    // static get properties(){
    //     return {
    //         message: {type: String}
    //     }
    // }

    static get properties() {
      return {
        records: {
          type: Array,
          hasChanged(newVal, oldVal) {
            console.log(`records property changes ${JSON.stringify(newVal)}`);
            return newVal > oldVal;
          }
        }
      }
    }

    @property({type: String}) data;
    @property({type: Array}) list;
   // @property({type: Array}) records;
    @property({type: String}) view;

    constructor(){
        super();
        this.message ='Hello World';
        console.log('Simple Elment');
        this.records = [];
        this.view='';
    }
    display=(row)=> {
        alert(JSON.stringify (row));
    }

    firstUpdated(changedProps) {
      console.log(`The First Update ${changedProps.get('records')}`);
    }
    updated(changedProps) {
    
      console.log(`The Update Method ${changedProps.get('records')}`);
      this.updateComplete.then(() => {
        console.log(`In update complete ${JSON.stringify(this.records)}`);
      });
    }

   


    selectClick=(evt)=> {
        alert(`Select Button CLick ${evt}`);
    }
    getValues=(d)=>{
      console.log(`The Value Received ${JSON.stringify(d)}`);
       this.view = html `<div>${JSON.stringify(d)}<div>`;
      
      console.log(`The Records ${JSON.stringify( this.records)}`);
    }
    render(){
       this.requestUpdate();
        console.log(`In Lit ${JSON.stringify(this.records)}`);
        if(this.records.length === 0) {
            return html `<div>no record found</div> <div>${this.data}</div>   `
        } else {   alert('else');
        return html `<h1>The Simple Element</h1> 
           <div>${this.message}</div>   
           <br/>
           <div>${this.data}</div>   
           <br/>
           <div>
             ${JSON.stringify(this.list)}
           </div>
           <br/>
           <div>
           <ul>
                 ${this.list.map(i =>
                     html`<li>${i}</li>`)
                    }
             </ul>
             <hr/>
              <div>Values Received fropm the Parent</div>
              <div>
                   
              </div>
             <hr/>
             <table>
               <thead>
                 <tr>
                   ${Object.keys(this.records[0]).map((col,i)=> html `<th>${col}</th>`)}
                 </tr>
               </thead>
               <tbody>
                  ${this.records.map((row,idx)=> 
                    html 
                    `<tr @click=${(evt)=>this.display(row)}>${Object.keys(this.records[0]).map((col,i)=> 
                        html `<td>${row[col]}</td>`)}
                        <td>
                          <input type="button" value="Select" @click=${this.selectClick(row)}/>
                        </td>
                        </tr>`)
                    }
               </tbody>
             </table>
           </div>
        `;
        }
    } 
}