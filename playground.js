let userHabit = document.getElementById("user-habit");
let submitButton = document.getElementById("submit-button");

// let para = document.createElement("p");
// let paraNode = document.createTextNode(userHabit.value);
// para.append(paraNode);


class MyHabit {
    constructor(habitFrequency) {
        this.habitFrequency = habitFrequency;
        this.showDetails = this.showDetails.bind(this);
        this.sayhello = this.sayhello.bind(this);
        this.name = "Terell";

        // submitButton.addEventListener("click", this.handleClick);
    }


    showDetails(){
        const inputValue = document.getElementById("user-habit").value;
        console.log(`${this.habitFrequency} and  ${inputValue}`);
    
    }

    sayhello() {
        console.log(`hello ${this.name}`
            
        )
    }
}


let habit1 = new MyHabit(3);
// let boundMethod = habit1.showDetails.bind(habit1);



submitButton.addEventListener("click", habit1.showDetails);
submitButton.addEventListener("click", habit1.sayhello);









