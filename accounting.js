var retrievedObject = localStorage.getItem('arrayOfObjectlocalStorage');

console.table(retrievedObject);

const departments = {
  "Administration":"Administration" ,
   "Marketing":"Marketing",
   "Development":"Development",
   "Finance":"Finance"
};
let obj = JSON.parse(retrievedObject);
let objArr = [];
var AdministrationCount = 0,MarketingCount = 0,DevelopmentCount=0,FinanceCount=0;
var AdministrationSalary = 0,MarketingSalary = 0,DevelopmentSalary=0,FinanceSalary=0;
for(let i = 0 ; i< obj.length;i++){
  if(obj[i]['department'] == "Administration"){
    AdministrationCount++;
    AdministrationSalary+=obj[i]['salary'];
  }else if(obj[i]['department'] == "Marketing"){
    MarketingCount++;
    MarketingSalary+=obj[i]['salary'];
  }
  else if(obj[i]['department'] == "Development"){
    DevelopmentCount++;
    DevelopmentSalary+=obj[i]['salary'];
  }else{
    FinanceCount++;
    FinanceSalary+=obj[i]['salary'];
  }
}
console.log(AdministrationSalary);
var AdministrationAvg = AdministrationSalary/AdministrationCount,MarketingAvg = MarketingSalary/MarketingCount,DevelopmentAvg=DevelopmentCount/DevelopmentSalary,FinanceAvg=FinanceCount/FinanceSalary;

let tbody = document.getElementById("body-table");
for(const i in departments){
  let tr = document.createElement("tr");
  if(i == "Administration"){
    tr.innerHTML = `<td>${i}</td><td>${AdministrationCount}</td><td>${AdministrationSalary}</td><td>${AdministrationSalary/AdministrationCount}</td>`;
  }else if(i == "Marketing"){
    tr.innerHTML = `<td>${i}</td><td>${MarketingCount}</td><td>${MarketingSalary}</td><td>${MarketingSalary/MarketingCount}</td>`;
  }
  else if(i == "Development"){
    tr.innerHTML = `<td>${i}</td><td>${DevelopmentCount}</td><td>${DevelopmentSalary}</td><td>${DevelopmentCount/DevelopmentSalary}</td>`;
  }else{
    tr.innerHTML = `<td>${i}</td><td>${FinanceCount}</td><td>${FinanceSalary}</td><td>${FinanceCount/FinanceSalary}</td>`;
  }
  
  tbody.appendChild(tr);
}
let tfoot = document.getElementById("foot-table");

let tr = document.createElement("tr");
tr.innerHTML = `<td>Total</td><td>${AdministrationCount +MarketingCount+DevelopmentCount+FinanceCount}</td><td>${AdministrationSalary+MarketingSalary+DevelopmentSalary+FinanceSalary}</td><td>${AdministrationAvg+MarketingAvg+DevelopmentAvg+FinanceAvg}</td>`;


tfoot.appendChild(tr);