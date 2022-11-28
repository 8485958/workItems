import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor() {

   }

workItemSaved!:Todo

  listTodoes:Todo[] = [{id:1,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"חשוב",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:2,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"רגיל",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:3,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:4,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:5,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:6,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:7,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:8,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:9,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:10,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},

  {id:11,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:12,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:13,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},
  {id:14,title:"במערכת השניה כשעושים שמירה כפתור לא עובד",body:"כשאני נכנס למחשב פותח כרום ופותח תיקייה חדשה תיקיה לא נפתחת",type:"לא דחוף",createdBy:"יהודה אבלס",assignedTo:"מנחם הר שושן"},

];

sortTodoes():Todo[]{
  let sortedProducts = this.listTodoes.sort(
    (p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0);
    return sortedProducts
}


  getTodoes():Todo[]{
    return this.sortTodoes();
  }
  getTodoById(id:any){
    return this.listTodoes.find(t => t.id == id);
  }
  deleteTodo(id:number):void{
    this.listTodoes.splice(this.listTodoes.findIndex(t => t.id == id),1);
  }
  addTodo(todo:Todo):void{
    todo.id = this.listTodoes.length+1
    this.listTodoes.push(todo);
  }
  updateTodo(id:number,todo:Todo):void{
    this.listTodoes.splice(this.listTodoes.findIndex(todo => todo.id == id),1);
    this.listTodoes.push(todo);
  }
  savedWorkItem(item:Todo){
    this.workItemSaved = item
  }
}
