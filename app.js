function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
    //default is to reload window after SUBMIT don't do that.
    event.preventDefault();
    //create title variable - we will have title variable will equal the value of the input entered when SUBMIT event gets activated
    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');
    //set the input's type to checkbox
    checkbox.type = 'checkbox';

    //set the title
    newLi.textContent = title;

    //attached the checkbox to the Li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //with this we will clear out input field as a courtesy to user
    //empty the input
    newToDoText.value = '';
    });
}

window.onload = function(){
  onReady();
}
