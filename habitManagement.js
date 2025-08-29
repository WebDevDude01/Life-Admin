let userInput = document.getElementById("user-habit");
let submitButton = document.getElementById("submit-habit");
let habitWall = document.getElementById("habits");



// program for tracking your habit.







// ===================================//
    // create all of the elements that are needed to create the habit card


submitButton.addEventListener("click", function(){
    if(userInput.value == ""){
        window.alert("Must enter a habit.")
        return
    };

    let createdHabit = document.createElement("div");
    let decreaseHabit = document.createElement("div");
    let decreaseButton = document.createElement("button");
    let para = document.createElement("p");
    para.id = "habit-para";
    let increaseHabit = document.createElement("div");
    let increaseButton = document.createElement("button");

    // give these elements the classes and id's to my the css selecters.
    createdHabit.classList.add("created-habit");
    decreaseHabit.id ="decrease";
    decreaseButton.id = "clear-streak1";
    increaseHabit.id = "increase";
    increaseButton.id = "addHabitBtn1";
    const decreaseTextNode = document.createTextNode("-");
    let paraNode = document.createTextNode(userInput.value);
    const increaseTextNode = document.createTextNode("+");


    // append the text nodes to their respective elements

    let counter = 1;
let counterMax = 30;
let counterPara = document.createElement("p");
counterPara.id = "habit-counter";
counterTextNode = document.createTextNode(`${counter}/${counterMax}`);
counterPara.append(counterTextNode);

    para.append(paraNode);

    decreaseButton.append(decreaseTextNode);
    increaseButton.append(increaseTextNode);
    decreaseHabit.append(decreaseButton);
    increaseHabit.append(increaseButton);
    createdHabit.append(decreaseHabit);
    createdHabit.append(para);
    createdHabit.append(counterPara);
    createdHabit.append(increaseHabit);
    
    habitWall.append(createdHabit);

    userInput.value = "";

    

});

// decreaseButton.addEventListener("click", function(){
//     counter = 0;
//     counterTextNode = document.createTextNode(`${counter}/${counterMax}`);
    

// })











