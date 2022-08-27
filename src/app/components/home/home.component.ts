import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'add-remove';
  task!: string;
  newTask!: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];
  
  add(){
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList)
  }
  remove(task: string) {
    const index: number = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1);
  }

  removeDone(task:string) {
    const index: number = this.tasksList.indexOf(task);
    this.tasksDone.splice(index, 1);

  }
  done(task:string){
    this.tasksDone.push(task);
    this.remove(task);
    console.log(this.tasksList);
    

  }

}
