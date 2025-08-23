let userInput = document.getElementById("user-habit");
let submitButton = document.getElementById("submit-habit");
let habitWall = document.getElementById("habits");



// program for tracking your habit.
let counter = 1;
let counterMax = 30;
let counterPara = document.createElement("p");
counterPara.id = "habit-counter";
counterTextNode = document.createTextNode(`${counter}/${counterMax}`);
counterPara.append(counterTextNode);






// ===================================//
    // create all of the elements that are needed to create the habit card
    let createdHabit = document.createElement("div");
    let decreaseHabit = document.createElement("div");
    let decreaseButton = document.createElement("button");
    let para = document.createElement("p");
    let increaseHabit = document.createElement("div");
    let increaseButton = document.createElement("button");

    // give these elements the classes and id's to my the css selecters.
    createdHabit.classList.add("created-habit");
    decreaseHabit.id ="decrease";
    decreaseButton.id = "clear-streak1";
    increaseHabit.id = "increase";
    increaseButton.id = "addHabitBtn1";
    const decreaseTextNode = document.createTextNode("-");
    let ParaNode = document.createTextNode(userInput.value);
    const increaseTextNode = document.createTextNode("+");



submitButton.addEventListener("click", function(){
    if(userInput.value == ""){
        window.alert("Must enter a habit.")
        return
    };
    // append the text nodes to their respective elements
    para.append(ParaNode);
    decreaseButton.append(decreaseTextNode);
    increaseButton.append(increaseTextNode);
    decreaseHabit.append(decreaseButton);
    increaseHabit.append(increaseButton);
    createdHabit.append(decreaseHabit);
    createdHabit.append(para);
    createdHabit.append(counterPara);
    createdHabit.append(increaseHabit);
    
    habitWall.append(createdHabit);

    userInput.value = ""

    

});

    decreaseButton.addEventListener("click", function(){
        console.log("");
    })

console.log(document);









