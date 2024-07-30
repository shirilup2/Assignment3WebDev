/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const dayMondayButton = document.querySelector("#monday");
const dayTuesdayButton = document.querySelector("#tuesday");
const dayWednesdayButton = document.querySelector("#wednesday");
const dayThursdayButton = document.querySelector("#thursday");
const dayFridayButton = document.querySelector("#friday");

const fullButton = document.querySelector("#full");
const halfButton = document.querySelector("#half");
const clearButton = document.querySelector("#clear-button");

const calculatedCostLabel = document.querySelector("#calculated-cost");

const COST_PER_FULL_DAY = 35;
const COST_PER_HALF_DAY = 20;

let totalCost = 0;
let numOfDaysSelected = 0;
let dailyRate = COST_PER_FULL_DAY;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayClickEventHandler(){
    if(this.classList.contains('clicked')){
        this.classList.remove('clicked');
        numOfDaysSelected -= 1;
    }
    else {
        this.classList.add('clicked');
        numOfDaysSelected += 1;
    }

    calculateTotalCost();   
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearClickEventHandler(){

    dayMondayButton.classList.remove('clicked');
    dayTuesdayButton.classList.remove('clicked');
    dayWednesdayButton.classList.remove('clicked');
    dayThursdayButton.classList.remove('clicked');
    dayFridayButton.classList.remove('clicked');

    numOfDaysSelected = 0;

    calculateTotalCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, 
// add the "clicked" class to the "half" element, remove it from the "full" element, 
// and recalculate the total cost.
function halfClickEventHandler(){
    dailyRate = COST_PER_HALF_DAY;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateTotalCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullClickEventHandler(){
    dailyRate = COST_PER_FULL_DAY;
    halfButton.classList.remove('clicked');
    fullButton.classList.add('clicked');
    calculateTotalCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost(){
    totalCost = numOfDaysSelected * dailyRate;
    calculatedCostLabel.innerHTML = totalCost;
}

/********* MAIN *********/
dayMondayButton.addEventListener("click",dayClickEventHandler);
dayTuesdayButton.addEventListener("click",dayClickEventHandler);
dayWednesdayButton.addEventListener("click",dayClickEventHandler);
dayThursdayButton.addEventListener("click",dayClickEventHandler);
dayFridayButton.addEventListener("click",dayClickEventHandler);

clearButton.addEventListener("click", clearClickEventHandler);
fullButton.addEventListener("click", fullClickEventHandler);
halfButton.addEventListener("click", halfClickEventHandler);
