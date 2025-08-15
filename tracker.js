// create a program that tracks the users habits and creates a streaks for everytime a habit is complete you will increase the number. If the users does not complete they habit, then the tracker will reset to zero.



let habitTracker1 = document.getElementById("habit1");
let habitTracker2 = document.getElementById("habit2");
let habitTracker3 = document.getElementById("habit3");

let clearStreak01 = document.getElementById("clear-streak1");
let clearStreak02 = document.getElementById("clear-streak2");
let clearStreak03 = document.getElementById("clear-streak3");

let habitStreak1 = document.getElementById("habit-streak1");
let habitStreak2 = document.getElementById("habit-streak2");
let habitStreak3 = document.getElementById("habit-streak3");

let addHabitBtn1 = document.getElementById("addHabitBtn1");
let addHabitBtn2 = document.getElementById("addHabitBtn2");
let addHabitBtn3 = document.getElementById("addHabitBtn3");

let streakCounter = 1;
let streakCounter2 = 1;
let streakCounter3 = 1;


let resetStreak = 0;

function clearStreak1() {
    streakCounter = "";
    habitStreak1.innerHTML = streakCounter ;


}
function handleStreak() {
    habitStreak1.innerHTML = streakCounter++
}

// ========================================
function clearStreak2() {
    streakCounter2 = 0;
    habitStreak2.innerHTML = streakCounter2 ;


}
function handleStreak2() {
    habitStreak2.innerHTML = streakCounter2++
}
// ========================================

function clearStreak3() {
    streakCounter3 = 0;
    habitStreak3.innerHTML = streakCounter3 ;


}
function handleStreak3() {
    habitStreak3.innerHTML = streakCounter3++
}
// ========================================



clearStreak01.addEventListener("click", clearStreak1);
clearStreak02.addEventListener("click", clearStreak2);
clearStreak03.addEventListener("click", clearStreak3);


addHabitBtn1.addEventListener("click", handleStreak);
addHabitBtn2.addEventListener("click", handleStreak2);
addHabitBtn3.addEventListener("click", handleStreak3);
