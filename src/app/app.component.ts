import { Component } from '@angular/core';
import {} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  done(task:string){
    this.tasksDone.push(task);
    this.remove(task);
    console.log(this.tasksList);
    

  }
     

}
