import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {Viajero} from '../viajero';
import {ViajeroService} from '../viajero.service';

/**
* The component for the list of viajeros in the BookStore
*/
@Component({
    selector: 'app-viajero',
    templateUrl: './viajero-list.component.html',
    styleUrls: ['./viajero-list.component.css']
})
export class ViajeroListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param viajeroService The author's services provider
    */
    constructor(
        private viajeroService: ViajeroService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {}


    /**
    * The list of viajeros which belong to the BookStore
    */
    viajeros: Viajero[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the viajero being edited.
     */
    viajero_edit_id: number;

    /**
    * Asks the service to update the list of viajeros
    */
    getViajeros(): void {
        this.viajeroService.getViajeros()
            .subscribe(viajeros => {
                this.viajeros = viajeros;
            });
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(viajero_id: number): void {
        if (!this.showEdit || (this.showEdit && viajero_id != this.viajero_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.viajero_edit_id = viajero_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateViajero(): void {
        this.showEdit = false;
    }

    /**
    * Deletes an viajero
    */
    deleteViajero(viajeroId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an viajero',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this viajero from the BookStore?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.viajeroService.deleteViajero(viajeroId).subscribe(() => {
                            this.toastrService.error("The viajero was successfully deleted", "Viajero deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }



    /**
    * This will initialize the component by retrieving the list of viajeros from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getViajeros();
    }
}
