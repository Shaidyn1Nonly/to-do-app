function onReady(){
  let toDos =[];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText= document.getElementById('newToDoText');

  //create function for the new to do
  function createNewToDo(){
    if (!newToDoText.value) { return;}

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = " "; //manually setting to clear
    renderTheUI();
    }

    //render is needed before the event of submit
    //will take out current state in the TodoArray and render the UI
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = "";
    //we'll use forEach to loop through array & render each to-do as an li
    //in the to-do <ul> list
    toDos.forEach(function(toDo){
     const newLi = document.createElement('li');
     const checkbox = document.createElement('input');
     checkbox.type= "checkbox";

     newLi.textContent = toDo.title;

     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
      });
    }

   //create event listener for form
   addToDoForm.addEventListener('submit', event =>{
    event.preventDefault();
<<<<<<< HEAD
    //create title variable - we will have title variable will equal the value
    //of the input entered when SUBMIT event gets activated
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
=======
    createNewToDo();
  });
  /*we are capable of creating todo and can listen to the submit event
  and state if changing we can't see it in our UI. we need to USE our state
  to render the UI.
  strategy will be to create a function called renderTheUI to render
  based on current state. when first load render that state, which is an empty
  value*/
  renderTheUI(); //renders when listens for submit event on form
>>>>>>> checkpoint-8-simple-to-do
}

window.onload = function(){
  onReady()
}
