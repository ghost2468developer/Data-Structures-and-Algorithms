
// A simple task list in JavaScript

// Create an empty array to hold all the tasks addeds
const tasks = [];

// Make a function to display the current task list that is added 
function displayTasks() {
  if (tasks.length === 0) {
    console.log("No tasks to display.");
  } else {
    console.log("Current tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Create a function to add a task to the end of the task list 
function addTask() {
  const newTask = prompt("Enter a new task:");
  tasks.push(newTask);
  console.log(`"${newTask}" has been added to the task list.`);
}

// Create a function to remove a task from the beginning of the task list
function removeFirstTask() {
  if (tasks.length === 0) {
    console.log("No tasks to remove.");
  } else {
    const removedTask = tasks.shift();
    console.log(`"${removedTask}" has been removed from the beginning of the task list.`);
  }
}

// Create a function to remove a task from the end of the task list
function removeLastTask() {
  if (tasks.length === 0) {
    console.log("No tasks to remove.");
  } else {
    const removedTask = tasks.pop();
    console.log(`"${removedTask}" has been removed from the end of the task list.`);
  }
}

// Create a function to remove a task from a specific position in the task list
function removeTask() {
  if (tasks.length === 0) {
    console.log("No tasks to remove.");
  } else {
    const index = parseInt(prompt("Enter the index of the task to remove:")) - 1;
    if (index < 0 || index >= tasks.length) {
      console.log("Invalid index.");
    } else {
      const removedTask = tasks.splice(index, 1)[0];
      console.log(`"${removedTask}" has been removed from the task list.`);
    }
  }
}

// Going back to the main program loop
let choice;
do {
  console.log("\nChoose an option:");
  console.log("1. Add a task");
  console.log("2. Remove a task from the beginning");
  console.log("3. Remove a task from the end");
  console.log("4. Remove a task from a specific position");
  console.log("5. Display the task list");
  console.log("6. Quit");
  choice = parseInt(prompt("Enter your choice (1-6):"));
  switch (choice) {
    case 1:
      addTask();
      break;
    case 2:
      removeFirstTask();
      break;
    case 3:
      removeLastTask();
      break;
    case 4:
      removeTask();
      break;
    case 5:
      displayTasks();
      break;
    case 6:
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid choice.");
  }
} while (choice !== 6);


//////////////////////////////////////////////////

Create a program that calculates the sum of all the elements in a given array of numbers. You can use any of the iteration methods discussed above to traverse 
the array elements and accumulate the sum. For example, if the array is [1, 2, 3, 4, 5], the program should output 15 as the sum. This challenge will help you 
practice array iteration and working with the length property.


// Create a const with a sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Start the initial counting from 0
let sum = 0;

// Iterate through each element in the array and add to sum
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Print out the output of the code
console.log(sum);

/////////////////////////////////////////////////////////////////////

Create a program that calculates the total of all the numbers inside the nested array.

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Write your code here to calculate the total of all numbers in the nestedArray




let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// In this code, we define a new variable nestedArray and assign it an array of three arrays. 
// Each of the three inner arrays has three numbers. This creates a nested array structure, which 
// can be thought of as an array of arrays.

let total = 0;
// Here, we define a new variable total and initialize it to zero. This variable will be used to accumulate the sum of all the numbers in the nested array.

for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    total += nestedArray[i][j];
  }
}

This is the main part of the code where we calculate the total of all the numbers in the nested array. We use two nested for loops to iterate over each element 
of the nested array. The outer loop iterates over the outer array, while the inner loop iterates over each inner array.

For each inner array, we use the inner loop to iterate over each element of that array. We then add each element to the total variable using the += operator, 
which is a shorthand way of writing total = total + nestedArray[i][j].

Finally, after all the iterations are complete, the total variable will contain the sum of all the numbers in the nested array.


console.log(total);
// This line logs the total variable to the console, so we can see the final result of our calculation.


//DOM practice
<div id="container">
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>
//DOM tracerse
<script type="text/javascript">
  let container = document.getElementById("container");
  let firstParagraph = container.firstChild;
  let secondParagraph = firstParagraph.nextSibling;
  let thirdParagraph = secondParagraph.nextSibling;
</script>


// DOM tree - various ways
let container = document.getElementById("container");
let newParagraph = document.createElement("p");
let textNode = document.createTextNode("New paragraph");

newParagraph.appendChild(textNode);
container.appendChild(newParagraph);


