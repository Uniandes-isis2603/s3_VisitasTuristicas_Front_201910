import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ViajeroService } from '../viajero.service';
import { Viajero } from '../viajero';
import { ViajeroDetail } from '../viajero-detail';

@Component({
    selector: 'app-viajero-detail',
    templateUrl: './viajero-detail.component.html',
    styleUrls: ['./viajero-detail.component.css']
})
export class ViajeroDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param ViajeroService The editorial's service
    * @param route The route element which helps to obtain the editorial's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private editorialService: ViajeroService,
        private route: ActivatedRoute
    ) { }

    /**
    * The editorial whose details we want to show
    */
    viajeroDetail: ViajeroDetail;



    /**
    * The editorial's id retrieved from the address
    */
    viajero_id: number;

    /**
    * The method which retrieves the books of an editorial
    */
    getViajeroDetail(): void {
        this.viajeroService.geViajeroDetail(this.viajero_id)
            .subscribe(editorialDetail => {
                this.viajeroDetail = viajeroDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
        this.viajero_id = +this.route.snapshot.paramMap.get('id');
        this.viajeroDetail = new ViajeroDetail();
        this.getViajeroDetail();
    }

}