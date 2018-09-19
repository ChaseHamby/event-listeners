// Making elements for toDo and notes below

const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

// Making variable for submit button and pulling from the submit button id below

const submitToDoButtonElem = document.getElementById('submitToDoButton');

// Making function that can use a delete button

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);

    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", () => {
            console.log('they clicked delete!!');
        })
    }
}

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
      <button href="#" class="btn btn-primary deleteButton">Delete</a>
    </div>
  </div>`;

    printToDom(domString,'toDoCards');
    activateDeletes(); // this has to be called after the print to DOM because it needs to have cards to delete. 
}
// Everytime we click the submit button, it is calling this function below to pull from the to-do and notes

submitToDoButtonElem.addEventListener("click", (e) => {
    e.preventDefault();
    buildNewToDoCard(toDoInputElem.value, notesInputElem.value); 
});

