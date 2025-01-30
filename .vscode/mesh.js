    const todoArray = [];
 //Access all the html tags through their Ids for easy manipulation with variable declarations
        const tasktodoForm = document.getElementById("todos-form");
        const todoInput = document.getElementById("task");
        const displayOut = document.getElementById("to-do-Div");
        const stats = document.getElementById("stats");

         //Get the value (taskObj) of the Input and push it  to the todoArray
            tasktodoForm.addEventListener("submit", (event) => {
            event.preventDefault(); 
            const task = todoInput.value; 
            const taskObj = { text: task, completed: false };
            todoArray.push(taskObj); 
            todoInput.value = ""; 
                 updateDisplayOutput(); 
                 });
                 //Create updateDisplayOutput function
                 function updateDisplayOutput() {
                 displayOut.innerHTML = ""; 
                 todoArray.forEach((taskObj) => {
                 const taskdiv = document.createElement("div");

                //Create Checkbox
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = taskObj.completed; 
                checkbox.addEventListener("change", () => {
                 taskObj.completed = checkbox.checked; 
                     updateStatistics(); // update statistics whenever checkbox checked (change)

                 });
                    //Add checkbox and text to the displayOut div
                const todotext = document.createTextNode(taskObj.text); 
                taskdiv.appendChild(checkbox); 
                taskdiv.appendChild(todotext); 
                 displayOut.appendChild(taskdiv); 
                 });

             updateStatistics(); // Update statistics whenever the display is updated
        }
 //Create the updateStatistics function
    function updateStatistics() {
    const completedTasks = todoArray.filter(task => task.completed).length; 
    const uncompletedTasks = todoArray.length - completedTasks; 
    stats.innerHTML = <strong>Completed Tasks</strong>; ${completedTasks}; <strong>Uncompleted Tasks</strong>; ${uncompletedTasks}; // Display statistics
}