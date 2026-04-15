const employees = [
  {
    name: "John",
    tasks: [
      { title: "Task1", completed: true },
      { title: "Task2", completed: false }
    ]
  },
  {
    name: "Jane",
    tasks: [
      { title: "Task1", completed: true },
      { title: "Task2", completed: true }
    ]
  }
];

// 1. Count completed tasks per employee
console.log("Completed Tasks:");
employees.forEach(emp => {
  const completedCount = emp.tasks.filter(task => task.completed).length;
  console.log(emp.name + ": " + completedCount);
});

// 2. Find employee with highest completion rate
let topEmployee = null;
let highestRate = 0;

employees.forEach(emp => {
  const completed = emp.tasks.filter(t => t.completed).length;
  const rate = completed / emp.tasks.length;

  if (rate > highestRate) {
    highestRate = rate;
    topEmployee = emp.name;
  }
});

console.log("\nTop Employee:", topEmployee);

// 3. Add a new task to all employees
employees.forEach(emp => {
  emp.tasks.push({ title: "Task3", completed: false });
});

// 4. Print employees who completed all tasks
console.log("\nEmployees who completed all tasks:");
employees.forEach(emp => {
  const allCompleted = emp.tasks.every(task => task.completed);
  
  if (allCompleted) {
    console.log(emp.name);
  }
});