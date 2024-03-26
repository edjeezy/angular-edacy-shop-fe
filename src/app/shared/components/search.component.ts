import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
    <div style="margin: 8px">
        <input type="text" [placeholder]="placeholderMessage" (keyup)="searchChanged($event)">
    </div>
    `,
    styles: [``]
})
export class SearchComponent implements OnInit {
    @Input() placeholderMessage!: string;
    @Output() searched: EventEmitter<string> = new EventEmitter();
    constructor() { }

    ngOnInit(): void { } 

    searchChanged(ev: any) {
        const text: string = ev.target.value;
        this.searched.emit(text);
    }
}
