import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Massege } from '../models/massege';

@Injectable({
  providedIn: 'root'
})
export class DirtyService {

  constructor() { }
  dirty:boolean[] = [false]
  massege:Massege = {todo:{id:0,title:"",body:"",type:"",createdBy:"",assignedTo:""},body:"",addres:""}
  openDialog:BehaviorSubject<Massege> = new BehaviorSubject(this.massege)
  getDialog():Observable<Massege>{
    return this.openDialog
  }
  setDialog(mas:Massege){
    this.openDialog.next(mas)
  }

}
