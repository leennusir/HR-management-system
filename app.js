'use strict'

const departments = {
   "Administration":"Administration" ,
    "Marketing":"Marketing",
    "Development":"Development",
    "Finance":"Finance"
};

const levels = {
    "Junior":"Junior" ,
    "Mid-Senior":"Mid-Senior",
    "Senior":"Senior "
};

//constractor
// function Employee (employeeID , fullName , department, level  ){
//     this.employeeID = employeeID;
//     this.fullName = fullName;
//     this.department = departments[department];
//     this.level = levels[level] ;
//     this.image = `./images/${this.fullName}.png`;
//     arrayOfObject.push(this);
// }
// Employee.prototype.getSalary = function(){

//       if (this.level == "Junior"){
//           var randomSalaty = Math.random() * (1000 - 500) + 500;
//       }else if(this.level == "Mid-Senior"){
//         var randomSalaty = Math.random() * (1500 - 1000) + 1000;
//       }else{
//        var randomSalaty = Math.random() * (2000 - 1500) + 1500;
//       }   
//       this.salary = randomSalaty;
//       return randomSalaty;
// }
// Employee.prototype.netSalary = function(){
//    this.net_salary = this.getSalary() * 0.75
// }

// // Employee.prototype.render = function(){
// //     document.writeln(`${this.fullName +" "+ this.getSalary()}`+'</br>');
// // }
 
//  let arrayOfObject = []
//  let obj1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
//  let obj2 = new Employee(1001,"Lana Ali","Finance","Senior");
//  let obj3 = new Employee(1002,"Tamara Ayoub","Marketing","Mid-Senior");
//  let obj4 = new Employee(1003,"Safi Walid","Administration","Senior");
//  let obj5 = new Employee(1004,"Omar Zaid","Development","Senior");
//  let obj6 = new Employee(1005,"Rana Saleh","Development","Junior");
//  let obj7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");
// console.log(arrayOfObject);
// //  for( let i = 0  ; i<arrayOfObject.length ; i++){
// //     arrayOfObject[i].render();
// //  }




let arrayOfObject = []
generateEmployee.prototype.getSalary = function(){

      if (this.level == "Junior"){
          var randomSalaty = Math.random() * (1000 - 500) + 500;
      }else if(this.level == "Mid-Senior"){
        var randomSalaty = Math.random() * (1500 - 1000) + 1000;
      }else{
       var randomSalaty = Math.random() * (2000 - 1500) + 1500;
      }   
      this.salary = randomSalaty;
      return randomSalaty;
}
generateEmployee.prototype.netSalary = function(){
   this.net_salary = this.getSalary() * 0.75};

function employeeIdNumber(){
     return Math.floor(1000 + Math.random() * 9000);
 }

let form = document.getElementById("FormAddUser");
console.log(form)
form.addEventListener("submit",function(event){
 event.preventDefault();
 let FullName = event.target.fullname.value;
 let department = event.target.Department.value;
 let level = event.target.Level.value;
 let image = event.target.userImage.value;

 let obj = new generateEmployee(FullName,department,level,image);
 obj.getSalary();
 obj.render();
});

function generateEmployee(FullName , department , level , image){
    this.FullName = FullName;
    this.department = departments[department];
    this.level = levels[level];
    this.image = image;
    this.employeeIdNumber = employeeIdNumber();
    arrayOfObject.push(this);
}
 events
generateEmployee.prototype.render = function(){
    let employee = document.getElementById("employee");
    let card = document.createElement("div");
    card.className="column";
    card.innerHTML= `<div class="card">
    <img src="`+this.image+`" alt="Avatar" style="width:50%">
      
      <h2><b>`+this.FullName+`</b></h2> 
      <h4>`+this.employeeIdNumber+`</h4> 
      <h4>`+this.level+`</h4>
      <h4>`+this.department+`<h4>
      <h4>`+this.salary+`</h4>
      </div>`;
      employee.appendChild(card);



};


 //
 let arrayOfObject = []
 let obj1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
 let obj2 = new Employee(1001,"Lana Ali","Finance","Senior");
 let obj3 = new Employee(1002,"Tamara Ayoub","Marketing","Mid-Senior");
 let obj4 = new Employee(1003,"Safi Walid","Administration","Senior");
 let obj5 = new Employee(1004,"Omar Zaid","Development","Senior");
 let obj6 = new Employee(1005,"Rana Saleh","Development","Junior");
 let obj7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

 function generateId(){
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}

let form = document.getElementById("formAddEmplpyee");
console.log(form);
let employees = document.getElementById("employees");
form.addEventListener("submit",function(event){
    event.preventDefault();
let id = generateId();
let fullName = event.target.fullName.value;
let department =  event.target.departments.value;
let level = event.target.levels.value;
let newEmployee = new Employee(id,fullName,department,level);
const div = document.createElement('div');
div.className = 'card';
div.innerHTML = `
<img width="50" height="50" src="https://img.lovepik.com/original_origin_pic/19/01/17/ffea3ab99d95aca466f5c9f3ccb6a7f3.png_wh300.png" > <h1>${newEmployee.fullName}</h1><p class="title">${newEmployee.department}</p><p>${newEmployee.level}</p>  `;

console.log(newEmployee);
employees.appendChild(div);
});
 main

