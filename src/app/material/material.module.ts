import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatRippleModule} from '@angular/material/core'
import{MatListModule} from '@angular/material/list'
import{MatButtonModule} from '@angular/material/button'
import{MatCardModule} from '@angular/material/card'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatSelectModule} from '@angular/material/select'
import{MatInputModule} from '@angular/material/input'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import{MatSidenavModule} from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

const modules = [
  CommonModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules],
})
export class MaterialModule { }
