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
$(document).ready(readyNow);

function readyNow() {
  $('#runApp').on('click', appendBonuses);
}

//Individual Bonus Calcuation
function getBonusPercentage(i) { //Instead of "i" any placeholder could be used

  if (employees[i].reviewRating <= 2) { //could have written it as the placeholder from the function, then called the function as the array-index combination. This would have allowed us to call an employee from a solitary object or a different array.
    employees[i].bonusPercentage = 0 //could have declared a new independent variable instead of adding a property to the existing object
  } else if (employees[i].reviewRating === 3) {
    employees[i].bonusPercentage = .04
  } else if (employees[i].reviewRating === 4) {
    employees[i].bonusPercentage = .06
  } else if (employees[i].reviewRating === 5) {
    employees[i].bonusPercentage = .10
  } //end merit bonus
  if (employees[i].employeeNumber.length == 4) { //business case: clarification would be needed if logic is needed for other lengths
    employees[i].bonusPercentage += .05
  } //end tenur bonus
  if (Number(employees[i].annualSalary) > 65000) { // greater-than and less-than does perform type conversion, so the Number method is not required
    employees[i].bonusPercentage -= .01
  } //end salary-based bonus decrease
  if (employees[i].bonusPercentage > .13) {
    employees[i].bonusPercentage = .13;
  } //end bonus max
  if (employees[i].bonusPercentage < 0) { //in theory, this could be written as else-if, but it would be impossible for both to be true simultaneously
    employees[i].bonusPercentage = 0;
  } //end bonus min
  return employees[i].bonusPercentage
} //end getBonusPercentage


//Function Logic
function EmployeeBonus(i) { //could also declare a new object-literal within the other function, then set the new object as the returner
  this.name = employees[i].name;
  this.bonusPercentage = getBonusPercentage(i); //based on merit and tenure, max and min
  this.totalBonus = Math.round(Number(employees[i].annualSalary) * employees[i].bonusPercentage) //Math.round(parseFloat()) could also work. parseInt would not work, because it would always round down!
  this.totalCompensation = Number(employees[i].annualSalary) + this.totalBonus
} //end EmployeeBonus

//Processing Employee Bonuses
function appendBonuses() {
  for (i = 0; i < employees.length; i++) { //for of loop would also work, also remember to call "let", because otherwise it's a global variable
    let appendData = new EmployeeBonus(i);
    $('#tableBody').append(`<tr>
          <td>${appendData.name}</td> 
          <td>${appendData.bonusPercentage}</td> 
          <td>${appendData.totalBonus}</td> 
          <td>${appendData.totalCompensation}</td>
          </tr>`)
  } //end for loop
} //end appendBonuses function