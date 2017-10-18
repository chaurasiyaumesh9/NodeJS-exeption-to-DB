import { Component } from '@angular/core';
import { IException } from './exception';
import { ExceptionService } from './exceptions.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ExceptionService]
})

export   class   AppComponent  {
   iexceptions: IException[];
   exception = new IException();
   constructor(private _exception: ExceptionService) {   }
   
   ngOnInit() : void {
      this.fetchList();
   }

   private fetchList(){
    this._exception.getExceptions()
      .subscribe(iexceptions => this.iexceptions = iexceptions);
   }

    addException(): void {
     this._exception.addException(this.exception);
     this.fetchList();
       this.reset(); 
    }


    private reset() {
       this.exception.name = null;  
       this.exception.code = null;
       this.exception.message = null;
     }  

   
}
