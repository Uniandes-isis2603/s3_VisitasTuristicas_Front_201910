import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail } from '../Viajero-detail';

@Component({
  selector: 'app-update-viajero',
  templateUrl: './update-viajero.component.html',
  styleUrls: ['./update-viajero.component.css']
})
export class UpdateViajeroComponent implements OnInit {

      /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private viajeroService: ViajeroService,
) {}

/**
* The author id as received from the parent component
*/
@Input() viajero: ViajeroDetail;

/**
* The output which tells the parent component
* that the user no longer wants to create an author
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new author
*/
@Output() update = new EventEmitter();

/**
* Updates the information of the author
*/
editViajero(): void {
    this.viajeroService.updateViajero(this.viajero)
        .subscribe(() => {
            
        });
    this.update.emit();
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelEdition(): void {
    this.cancel.emit();
}


/**
* This function will initialize the component
*/
ngOnInit() {
  console.log("pruebas");
  console.log(this.viajero);
}

/**
* This function will be called when the user chooses another author to edit
*/
ngOnChanges() {
    this.ngOnInit();
}

}
