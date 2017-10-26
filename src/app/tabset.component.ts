import { Component, Input } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'tabset',
    template: `
<ngb-tabset type="pills" [orientation]="vertical" id="tabset" class="tabset">
    <ngb-tab *ngFor="let tabset of tabsetItems; let i = index; let isFirst = first ">
        <ng-template ngbTabTitle >
           <div (click)="onTabClick($event)" id="{{tabset.id}}"> 
                <i class="{{tabset.icon_class}}" aria-hidden="true"></i>
                <span class="tabset_txt">{{tabset.name}}</span>
            </div>
        </ng-template>
        <ng-template ngbTabContent>
            <div [ngSwitch]="number" >
                <div *ngSwitchCase="1" class="content_txt">
                    <h1 class="home_txt">Hello! This is home page</h1>
                </div>
                <div *ngSwitchCase="2" class="content_txt">
                    {{tabset.name}}
                </div>
                <div *ngSwitchCase="3" class="content_txt">
                    <p>{{tabset.name}}</p>
                    <p>x</p>
                    <p>x</p>
                    <p>x</p>
                </div>
                <div *ngSwitchCase="4">
                    <menu></menu>
                </div>
                <div *ngSwitchCase="5" class="content_txt">
                    <p>{{tabset.name}}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <ng-template ngSwitchDefault>
                    <p class="content_txt">not found</p>
                </ng-template>
            </div>
        </ng-template>
    </ngb-tab>
</ngb-tabset>
  `
})

export class Tabset {
    number: number;
    constructor() {
        this.number = 1;
    }

    onTabClick(event: Event) {
        this.number = event['srcElement']['id'] || event['srcElement']['parentNode']['id'];
    }

    public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === '{{tabset.id}}') {
            $event.preventDefault();
        };
    }
    tabsetItems = [
        { id: 1, name: 'Mega System', icon_class: "fa fa-align-right menu-icon right" },
        { id: 2, name: 'Section 1', icon_class: "fa fa-line-chart menu-icon" },
        { id: 3, name: 'Section 2', icon_class: "fa fa-file-text-o menu-icon" },
        { id: 4, name: 'Section 3', icon_class: "fa fa-cube menu-icon" },
        { id: 5, name: 'Section 4', icon_class: "fa fa-cloud menu-icon" }
    ];
    
}
