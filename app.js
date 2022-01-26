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

const salaryWithMinMax = {
    "Junior" : {"min":500,"max":1000},
    "Mid-Senior" : {"min":1000,"max":1500},
    "Senior" : {"min":1500,"max":2000}
};

//constractor
function Employee (employeeID , fullName , department, level  ){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = departments[department];
    this.level = levels[level] ;
    this.image = `./images/${this.fullName}.png`;
    arrayOfObject.push(this);

}
Employee.prototype.getSalary = function(){

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
Employee.prototype.netSalary = function(){
   this.net_salary = this.getSalary() * 0.75
}

Employee.prototype.render = function(){
    document.writeln(`${this.fullName +" "+ this.getSalary()}`+'</br>');
}
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

 
