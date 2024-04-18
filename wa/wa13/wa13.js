function print (n, obj){
    console.log(`Problem ${n}`, JSON.parse(JSON.stringify(obj)))
}


//problem 1- create JSON for each employee

const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },

    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },

    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];

//console.log('Problem 1', employees);
print(1, employees);

// problem 2 - create JSON for company

const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
}

//console.log('Problem 2', company);
print(2, company);

//Problem 3-A new employee has joined

const newEmployee = {
        firstName: "Anna",
        department: "Tech",
        designation: "Executive",
        salary: 25600,
        raiseEligible: false
}

company.employees.push(newEmployee);


//console.log('Problem 3', employees);
print(3, employees);

//Problem 4- calculate total salary for all company employees

let total = 0;
for (employee of employees){
    total += employee["salary"];
}

//console.log('Problem 4', total);
print(4, total);

//Problem 5 - update salary for eligible employees

for (employee of employees){
    if (employee["raiseEligible"]==true){
        employee["salary"] *= 1.1;
        employee["raiseEligible"] = false
    }

}

//console.log('Problem 5', employees)
print(5, employees);

//Problem 6 - Indicate who is working from home
const employeeWFH = ['Anna', 'Sam'];
for(const employee of employees){
    let flag = false;
    for(const employeeName of employeeWFH){
        if (employee.firstName == employeeName){
            flag = true;
            break;
        }

    }
    employee.WFH = flag;
}
print (6, employees);


