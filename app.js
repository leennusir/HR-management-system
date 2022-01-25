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
console.log(arrayOfObject);
 for( let i = 0  ; i<arrayOfObject.length ; i++){
    arrayOfObject[i].render();
    

 }

 
