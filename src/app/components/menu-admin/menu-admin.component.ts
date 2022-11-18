import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/shared/services/menu.service';

import { Componente } from '../../shared/interfaces/menu-admin.interfaces';
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.componentes = this.menuService.getMenuOpts();
  }
  
}
