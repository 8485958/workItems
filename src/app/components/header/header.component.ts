import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirtyService } from 'src/app/core/services/dirty.service';
import { MatDialog } from '@angular/material/dialog';
import { Massege } from 'src/app/core/models/massege';
import { Todo } from 'src/app/models/todo';
import { BugService } from 'src/app/core/services/workItems.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private dirtyService: DirtyService, private router: Router, private bugService: BugService) {
    this.dirtyService.getDialog().pipe(filter(m => m.body!="")).subscribe((res) => {
        console.log("res:", res);

        const dialogRef = this.dialog.open(DialogComponent, {disableClose: true});

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.bugService.updateTodo(this.bugService.workItemSaved.id,this.bugService.workItemSaved)
            this.router.navigate([res.addres])
          }
          else {
            console.log("falsee");
            this.router.navigate([res.addres])
          }

          this.dirtyService.dirty[0] = false
          console.log(`Dialog result: ${result}`);
        });
      
    })
  }

  ngOnInit(): void {
  }


  linkTo(addres: string) {
    if (this.dirtyService.dirty[0]) {
      this.dirtyService.setDialog(new Massege(this.bugService.workItemSaved, "יצאת בלי לשמו",addres))
    }
    else {

      this.router.navigate([addres])
    }
  }

}
@Component({
  selector: 'app-dialog',
  templateUrl: '../dialog/dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}