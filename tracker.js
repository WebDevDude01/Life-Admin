// Working with classes.
class Habit {
    constructor(habitName, habitFrequency) {
        this.habitName = habitName;
        this.habitFrequency = habitFrequency;
        this.history = [];
    }

    displayHabit() {
        console.log(`Hello ${this.habitName}, how are you doing today?`);
        console.log(`And you plan on doing this for ${this.habitFrequency} days?`);
        
    }

    markCompleted(date = new Date()) {
        this.history.push(date.toISOString().split("T")[0]);
        
        
    }

    isCompletedToday() {
        const today = new Date().toISOString().split("T")[0];
        //return 
        console.log(this.history.includes(today));
    }
}

const habit1 = new Habit("Go to the gym.", 30)

habit1.displayHabit();
habit1.markCompleted();
habit1.markCompleted();
habit1.markCompleted();
habit1.markCompleted();
habit1.isCompletedToday();
habit1.isCompletedToday();
habit1.isCompletedToday();

habit1.isCompletedToday();




