// Making elements for toDo and notes below

const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

// Making variable for submit button and pulling from the submit button id below

const submitToDoButtonElem = document.getElementById('submitToDoButton');

// Print to DOM function below

const printToDom = (stringToPrint, emptyDiv) => {
    document.getElementById(emptyDiv).innerHTML += stringToPrint;
}

// Used a card from bootstrap and added it into this function below //

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text"> ${notes}</p>
      <a href="#" id="deleteButton" class="btn btn-primary">Delete</a>
    </div>
  </div>`;

    printToDom(domString,'toDoCards');
}
// Everytime we click the submit button, it is calling this function below to pull from the to-do and notes

submitToDoButtonElem.addEventListener("click", (e) => {
    e.preventDefault();
    buildNewToDoCard(toDoInputElem.value, notesInputElem.value); 
});

