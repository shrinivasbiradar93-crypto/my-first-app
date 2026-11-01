import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent   {

  //  title = 'I Love Angular';
  //  userName = 'John';

skills:Array<string> = ["html", "css", "javascript", "Angular", "java"];

products:Array<string> = ["laptop", "mobile", "keyboard", "mouse", "monitor"];

books:Array<string> = ["Atomic Habits", "The Alchemist", "Rich Dad Poor Dad", "Wings of Fire", "Deep Work"];

students:Array<string> = ["Rahul", "Amit", "Priya", "Sneha", "Rohit"];

cities:Array<string> = ["Latur", "Pune", "Mumbai", "Nashik", "Nagpur"];

colors:Array<string> = ["red", "blue", "green", "yellow", "black"];

fruits:Array<string> = ["apple", "banana", "mango", "orange", "grapes"];

vehicles:Array<string> = ["car", "bike", "bus", "truck", "scooter"];

courses:Array<string> = ["Angular", "React", "TypeScript", "Node.js", "Python"];

employees:Array<string> = ["Amit", "Rahul", "Sneha", "Priya", "Rohit"];

products1:Array<string> = ["laptop", "mobile", "keyboard", "mouse", "monitor"];

books1:Array<string> = ["Atomic Habits", "The Alchemist", "Rich Dad Poor Dad", "Wings of Fire", "Deep Work"];

students1:Array<string> = ["Rahul", "Amit", "Priya", "Sneha", "Rohit"];

cities1:Array<string> = ["Latur", "Pune", "Mumbai", "Nashik", "Nagpur"];

skills1:Array<string> = ["HTML", "CSS", "JavaScript", "Angular", "TypeScript"];

colors1:Array<string> = ["Red", "Blue", "Green", "Black", "White"];

fruits1:Array<string> = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

countries:Array<string> = ["India", "USA", "UK", "Canada", "Australia"];

employees1:Array<string> = ["Amit", "Priya", "Rahul", "Sneha", "Rohit"];

languages:Array<string> = ["JavaScript", "TypeScript", "Java", "Python", "C++"];

vehicles1:Array<string> = ["Car", "Bike", "Bus", "Truck", "Scooter"];

courses1:Array<string> = ["Angular", "React", "Node.js", "Java", "Python"];

sports:Array<string> = ["Cricket", "Football", "Hockey", "Tennis", "Badminton"];

mobileBrands:Array<string> = ["Vivo", "Oppo", "Redmi", "Samsung", "Realme"];

programmingTools:Array<string> = ["VS Code", "Git", "GitHub", "Postman", "Chrome"];
  

}
