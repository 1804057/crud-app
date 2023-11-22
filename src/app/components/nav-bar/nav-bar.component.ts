import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdEditStudentsComponent } from '../ad-edit-students/ad-edit-students.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private dialog: MatDialog){}
  openAddEditForm(){
    this.dialog.open(AdEditStudentsComponent);
  }
}
