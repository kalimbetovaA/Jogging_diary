import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


export class Result{
    constructor(public date: string | undefined,
                public distance: number | undefined,
                public time: string | undefined)
    { }
}

@Component({
    selector: 'app-add-record',
    templateUrl: './add-record.component.html',
    styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {

    constructor() { }
    date: string | undefined;
    time: string | undefined;
    distance: number | undefined;


    results: Result [] = [];
    save(){
        this.results.push(new Result(this.date, this.distance, this.time));
    }
    printResult(form: NgForm){
        console.log(form);
    }

}