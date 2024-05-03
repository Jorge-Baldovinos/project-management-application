// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const calendar = document.querySelector('#modal-task-due-date');

// Todo: create a function to generate a unique task id
function generateTaskId() { 
    uniqueTaskId = Date.now();
    uniqueTaskId.toString;
    console.log(`${uniqueTaskId}`);
}

function renderCalendar() {
  dayjs('2019-01-25').daysInMonth() // 31
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const addTaskButtonEl = $('.btn-success');
    
    function openCheck(dialog) {
        if (dialog.open) {
          console.log("Dialog open");
        } else {
          console.log("Dialog closed");
        }
      }

    addTaskButtonEl.on('click', function() {
        dialog.showModal();
        openCheck
    })
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

generateTaskId();
console.log(dayjs());
renderCalendar();

