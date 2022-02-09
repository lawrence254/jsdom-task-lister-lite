document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let tasks = document.getElementById('tasks');
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', handleFormSubmit);
  function handleFormSubmit(event) {
    let li = document.createElement('li');
    let task = document.getElementById('new-task-description').value;
    li.innerHTML = task;
    tasks.appendChild(li);
    form.reset()
    console.log(task)
    event.preventDefault();
  }
});
