import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../classes/card';

@Component({
  selector: 'card-display',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-evenly center" 
        *ngFor="let subArr of grouped; let i = index">
        <div fxLayout="row" fxLayoutAlign="space-evenly center">
            <card *ngFor="let card of subArr"
                [card]="card">
            </card>
        </div>
    </div>
  `,
  styles: [`
    
  `]
})

export class CardDisplayComponent implements OnInit {

    @Input() cards: Array<Card>
    @Input() rowLength: number = 13;
    grouped: Array<Array<Card>>;
    
    constructor() {

    }


    ngOnInit() {
        this.grouped = this.createGroupedArray(this.cards, this.rowLength);
        console.log(this.grouped);
    }

    createGroupedArray(arr: Array<any>, chunkSize: number): Array<Array<any>> {
        let groups = [];
        let i, j;
        for (i = 0, j = arr.length; i < j; i += chunkSize) {
            groups.push(arr.slice(i, i + chunkSize));
        }
        return groups;
    }

}