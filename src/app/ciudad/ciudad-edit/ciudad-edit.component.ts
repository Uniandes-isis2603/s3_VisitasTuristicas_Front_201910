import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import { CiudadService } from '../ciudad.service';
import { CiudadDetail } from '../ciudad-detail';

@Component({
  selector: 'app-ciudad-edit',
  templateUrl: './ciudad-edit.component.html',
  styleUrls: ['./ciudad-edit.component.css']
})
export class CiudadEditComponent implements OnInit {

   constructor(
    private ciudadService: CiudadService,
) {}

/**
* The author id as received from the parent component
*/
@Input() ciudadDetail: CiudadDetail;

@Output() update = new EventEmitter();

@Output() cancel = new EventEmitter();

/**
* Updates the information of the author
*/
editCiudad(): void {
    this.update.emit();
    this.ciudadService.updateCiudad(this.ciudadDetail)
        .subscribe(() => {
        });
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
  console.log("Encontremos el error <3");
  console.log(this.ciudadDetail);
}



/**
* This function will be called when the user chooses another author to edit
*/
ngOnChanges() {
    this.ngOnInit();
}

}