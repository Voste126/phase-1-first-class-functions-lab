// Code your solution in this file!
// the variable with the first array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2);
}
//console.log(returnFirstTwoDrivers());
function returnLastTwoDrivers(){
    return drivers.slice(2,4);
}
//console.log(returnLastTwoDrivers());
//selection of drivers as an array
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];
  
      

console.log(selectingDrivers[0]);
//console.log(selectingDrivers[1](drivers));

function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }

  function fareDoubler(fare) {
    //collection of the value of fare then double
    return fare * 2;
  }

  function fareTripler(fare) {
    //collection of value as fare then you triple
    return fare * 3;
  }
  
  function selectDifferentDrivers(arrayOfDrivers, selectorFunction) {
    // array of driver is the const drivers and selector function is for the two functions 
    return selectorFunction(arrayOfDrivers);
  }
 // console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
  //console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Amari', 'Mo']
  


