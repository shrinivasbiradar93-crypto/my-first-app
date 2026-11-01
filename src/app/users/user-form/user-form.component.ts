import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent   {

   title = 'I Love Angular';
   userName = 'John';

  Angular: string = "Angular is a TypeScript-based web development framework developed and maintained by Google. It isused to build dynamic, interactive, and single-page web applications (SPAs). "
  Routing :string ="Routing is the process of navigating from one page to another within an angular application without reloading the entire page.";
  DataBinding:string="Data binding connects the TypeScript code with the HTML template in Angular. It helps display data and respond to user actions. Angular supports interpolation, property binding, event binding, and two-way data binding.";
  Interpolation:string="Interpolation is used to display a TypeScript variable or expression in an HTML template. It uses double curly braces, such as {{ name }}. For example, if the name variable contains Rahul, Angular displays Rahul on the webpage.";
  Modules:string="An Angular module is used to organize related components, directives, pipes, and services. In Angular 14, we commonly use NgModule to group application features. The root module is usually called AppModule, which helps configure the application."
  Component:string="A component is the basic building block of an Angular application. Every component usually contains a TypeScript file, an HTML template, and a CSS or SCSS file. The TypeScript file contains the logic, the HTML file displays the user interface, and the CSS file provides styling."
  Directives:string=" are used to change the appearance or behavior of HTML elements. Angular provides structural directives such as *ngIf and *ngFor, and attribute directives such as ngClass and ngStyle. Directives help create dynamic and reusable user interfaces."
  ngfor:string="The *ngFor directive is used to display a list of items by repeating an HTML element for each item in an array. For example, it can display a list of students, products, books, or cities. It reduces repeated HTML code and makes list rendering easier."
  service:string="A service is a TypeScript class used to share data and functionality across components. Services commonly handle API calls, business logic, and shared information. They are often provided through Angular dependency injection so that multiple components can use the same service."
  ReactiveForm:string="Reactive forms define form controls and validation rules in the TypeScript file using classes such as FormGroup and FormControl. They provide explicit control over form data and validation. Reactive forms are useful for complex forms with dynamic fields and validation requirements."


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
