const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

//Individual Bonus Calcuation
function getBonusPercentage(i) {

  if (employees[i].reviewRating <= 2) {
    employees[i].bonusPercentage = 0
  } else if (employees[i].reviewRating === 3) {
    employees[i].bonusPercentage = .04
  } else if (employees[i].reviewRating === 4) {
    employees[i].bonusPercentage = .06
  } else if (employees[i].reviewRating === 5) {
    employees[i].bonusPercentage = .10
  } //end merit bonus
  if (employees[i].employeeNumber.length == 4) {
    employees[i].bonusPercentage += .05
  } //end tenur bonus
  if (Number(employees[i].annualSalary) > 65000) {
    employees[i].bonusPercentage -= .01
  } //end salary-based bonus decrease
  if (employees[i].bonusPercentage > .13) {
    employees[i].bonusPercentage = .13;
  } //end bonus max
  if (employees[i].bonusPercentage < 0) {
    employees[i].bonusPercentage = 0;
  } //end bonus min
  return employees[i].bonusPercentage
} //end getBonusPercentage


//Function Logic
function EmployeeBonus(i) {
  this.name = employees[i].name;
  this.bonusPercentage = getBonusPercentage(i); //based on merit and tenure, max and min
  this.totalBonus = Math.round(Number(employees[i].annualSalary) * employees[i].bonusPercentage)
  this.totalCompensation = Number(employees[i].annualSalary) + this.totalBonus
} //end EmployeeBonus

//Processing Employee Bonuses
for (i = 0; i < employees.length; i++) {
  console.log(new EmployeeBonus(i));
}

