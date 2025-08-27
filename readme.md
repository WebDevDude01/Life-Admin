Here are the list of task I have to complete.

Task 


ADDING USER DATA TO YOUR HABITS.
    -The application must be able to collect the user input for what habit they want to add 

    -The user must have a list of option to select from (habits, dailies, and to do)


create a system for creating streaks out the user habits that they perform on a daily.

    -using css create a grid. each block in the grid must be able to change colors independent of the other blocks in the grid.


#  I need to create an object. This object will store multiple functions, that will handle how streaks work in my habit application.

# I need to figure out to build a function that will work for all three of the buttons I am using.  storing multiple functions inside a object is called a method.

<!-- ========================================== -->
Example Scenario

Let’s say your app allows users to:

Add a habit (e.g., "Exercise")

Track whether they completed it today

Set a frequency (e.g., daily, weekly)

Mark completion history

Instead of handling all this with raw arrays and scattered variables, you could define classes like:

// Class representing a single habit
class Habit {
  constructor(name, frequency) {
    this.name = name;
    this.frequency = frequency; // e.g., "daily", "weekly"
    this.history = []; // array of dates when habit was completed
  }

  markCompleted(date = new Date()) {
    this.history.push(date.toISOString().split('T')[0]); // store date only
  }

  isCompletedToday() {
    const today = new Date().toISOString().split('T')[0];
    return this.history.includes(today);
  }
}


Then maybe a User class (optional, if you have multiple users):

class User {
  constructor(name) {
    this.name = name;
    this.habits = [];
  }

  addHabit(name, frequency) {
    const newHabit = new Habit(name, frequency);
    this.habits.push(newHabit);
  }

  getHabit(name) {
    return this.habits.find(h => h.name === name);
  }
}

Benefits of Using Classes

Encapsulation: Habit behavior (like markCompleted) lives inside the Habit class.

Maintainability: Easy to update logic in one place.

Clarity: Easier to understand your app structure.

Persistence: You can easily serialize (e.g., with JSON.stringify()) and store in localStorage.

Storing Data

For a browser-based app, you’ll likely store data in localStorage:

// Save user data
localStorage.setItem('userData', JSON.stringify(user));

// Load user data
const data = JSON.parse(localStorage.getItem('userData'));
// You'd need to rehydrate it into class instances if needed


Rehydration example (important):

const loadedData = JSON.parse(localStorage.getItem('userData'));
const user = new User(loadedData.name);
loadedData.habits.forEach(h => {
  const habit = new Habit(h.name, h.frequency);
  habit.history = h.history;
  user.habits.push(habit);
});

TL;DR

✅ Yes, use classes and objects if:

Your app is more than a toy demo

You want clean, reusable code

You’ll be doing more than just listing habits

Let me know if you want help designing a class structure for your app specifically!

Attach
Search
Study