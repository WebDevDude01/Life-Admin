let userHabit = document.getElementById("user-habit");


let submitButton = document.getElementById("submit-button");

// let para = document.createElement("p");
// let paraNode = document.createTextNode(userHabit.value);
// para.append(paraNode);


class MyHabit {
    constructor(habitFrequency) {
        this.userHabit = userHabit;
        this.habitName = userHabit.value;
        this.habitFrequency = habitFrequency;
    }

    showDetails(){
        console.log(this.habitName);
        console.log(this.habitFrequency);
    }
}


let habit1 = new MyHabit(3);


submitButton.addEventListener("click",habit1.showDetails)









