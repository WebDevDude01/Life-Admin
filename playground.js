const userInput = document.getElementById("user-habit");
const submitButton = document.getElementById("submit-button");
let habitWall = document.getElementById("habits");

class MyHabit {
    constructor(habitFrequency){
        this.habitTitle = userInput.value;
        this.habitFrequency = habitFrequency;
        this.history = [];
        this.showHabit = this.showHabit.bind(this);
        this.trackHabitCounterAndDate = this.trackHabitCounterAndDate.bind(this);
        this.counter = 0;
    }

    showHabit(){
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
        // ======================================================//
        createdHabit.classList.add("created-habit");
        decreaseHabit.id ="decrease";
        decreaseButton.id = "clear-streak1";
        increaseHabit.id = "increase";
        increaseButton.id = "addHabitBtn1";
        const decreaseTextNode = document.createTextNode("-");
        let paraNode = document.createTextNode(userInput.value);
        const increaseTextNode = document.createTextNode("+");
        // ======================================================//
        let counter = 1;
        let counterMax = 30;
        let counterPara = document.createElement("p");
        counterPara.id = "habit-counter";
        let counterTextNode = document.createTextNode(`${counter}/${counterMax}`);
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
    }

    trackHabitCounterAndDate(){

    }

}

const habit1 = new MyHabit(30);

submitButton.addEventListener("click",habit1.showHabit);









