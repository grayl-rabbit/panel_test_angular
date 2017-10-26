import { Component, Input } from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
// import { Hero } from './hero';

@Component({
  selector: 'menu',
  template: `
  <ngb-tabset  class="dropdown dropdown-submenu s_content nav-justified"  >
    <ngb-tab *ngFor="let menu of menuItems; let d = index;"  id="{{menu.id}}" >
  
      <ng-template ngbTabTitle>
        <ul class="navbar-nav">
          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle menu_txt" data-toggle="dropdown" 
            id="submenu" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <fa name="cog" animation="spin"></fa>{{menu.name}}
            </a>
            <div class="dropdown-menu" aria-labelledby="submenu" >
              <a (click)="beforeChange($event)" class="dropdown-item dropdown_txt" id="{{sub.id}}"
              href="#" *ngFor="let sub of menu.submenu; let i = index; let isFirst = first">
              {{sub.id}} = {{sub.name}}</a>
            </div>
          </li>
        </ul>  
      </ng-template>

      <ng-template ngbTabContent>
        <div class="content_txt">
          <p>tab: {{menu.id}}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </ng-template>
    </ngb-tab>
  </ngb-tabset>
  `
})

export class Menu {
  
  menuItems = [
    { id: 1, name: 'Menu item with submenu 1', submenu: [
      { id: 11, name: 'part 1 submenu 1' },
      { id: 12, name: 'part 1 submenu 2' },
      { id: 13, name: 'part 1 submenu 3' },
      { id: 14, name: 'part 1 submenu 4' },
    ]},
    { id: 2, name: 'Menu item with submenu 2', submenu: [
      { id: 21, name: 'part 2 submenu 1' },
      { id: 22, name: 'part 2 submenu 2' },
      { id: 23, name: 'part 2 submenu 3' },
      { id: 24, name: 'part 2 submenu 4' },
    ] },
    { id: 3, name: 'Menu item with submenu 3', submenu: [
      { id: 31, name: 'part 3 submenu 1' },
      { id: 32, name: 'part 3 submenu 2' },
      { id: 33, name: 'part 3 submenu 3' },
      { id: 34, name: 'part 3 submenu 4' },
    ] },
  ];
  public beforeChange($event: NgbTabChangeEvent) {
    alert($event['srcElement']['id']);
  }
}

