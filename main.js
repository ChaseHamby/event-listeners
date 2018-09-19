// Making elements for toDo and notes below

const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

// Making variable for submit button and pulling from the submit button id below

const submitToDoButtonElem = document.getElementById('submitToDoButton');

let counter = 0; // see this counter later down the page - used to number each card created - makes it possible for deleting cards

// Making function that can use a delete button below

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);

    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            // card that the button was on 
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode; // had to do parentNode twice cause the button is nested in 2 divs (card-body and then card)
            cardToDelete.remove();
        })
    }
}

// Print to DOM function below

const printToDom = (stringToPrint, emptyDiv) => {
    document.getElementById(emptyDiv).innerHTML += stringToPrint;
}

// Used a card from bootstrap and added it into this function below //

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text"> ${notes}</p>
      <button href="#" class="btn btn-danger deleteButton" id=${counter}>Delete</a>
    </div>
  </div>`;

    counter ++; // counts up one every time a card is created and helps the delete function know which card to delete
    printToDom(domString,'toDoCards');
    activateDeletes(); // this has to be called after the print to DOM because it needs to have cards to delete. 
}

// Everytime we click the submit button, it is calling this function below to pull from the to-do and notes

submitToDoButtonElem.addEventListener("click", (e) => {
    e.preventDefault(); // allows the page to load properly because it's using a form. If this isn't here, stuff won't work as well
    buildNewToDoCard(toDoInputElem.value, notesInputElem.value); 
});

// Another way to do submit function - this way actually uses the submit event option below

// document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
//     e.preventDefault();
//     buildNewToDoCard(toDoInputElem.value, notesInputElem.value); 
// });
