function getInputValue () {
    let input = document.getElementById("todo-adding");
    return input.value;
}


function createTodoItem () {
    let todoItem = document.createElement("li");
    todoItem.setAttribute("class", "todo-item");
    return todoItem;
}


function createTodoItemContainer () {
    let todoItemContainer = document.createElement("div");
    todoItemContainer.setAttribute("class", "todo-item-container");
    return todoItemContainer;
}


function createTodoTextContainer () {
    let todoTextContainer = document.createElement("div");
    todoTextContainer.setAttribute("class", "todo-text-container");
    return todoTextContainer;
}


function createTodoText () {
    let todoText = document.createElement("div");
    todoText.setAttribute("class", "todo-text");
    return todoText;
}


function createHeartIcon () {
    let heartIcon = document.createElement("i");
    heartIcon.setAttribute("class", "fas fa-heart heart-icon");
    return heartIcon;
}


function createTodoTextP () {
    let todoTextP = document.createElement("p");
    return todoTextP;
}


function createTodoAttribute () {
    let todoAttribute = document.createElement("div");
    todoAttribute.setAttribute("class", "todo-attribute");
    return todoAttribute;
}


function createDate (currentDate) {
    let date = document.createElement("p");
    date.textContent = currentDate;
    return date;
}


function createPriority (givingPriority) {
    let priority = document.createElement("p");
    priority.textContent = givingPriority;
    priority.setAttribute("class", "piority");
    return priority;
}


function createIconContainer () {
    let iconContainer = document.createElement("div");
    iconContainer.setAttribute("class", "icon-container");
    return iconContainer;
}

function createArrowButton () {
    let arrowButton = document.createElement("button");
    arrowButton.setAttribute("class", "arrow");
    arrowButton.addEventListener("click", addFourIcons);
    return arrowButton;
}

function createPencilButton () {
    let pencilButton = document.createElement("button");
    pencilButton.setAttribute("class", "pencil");
    pencilButton.setAttribute("style", "display: none");
    pencilButton.addEventListener("click", editTodoTextP);
    return pencilButton;
}

function createCalendarButton () {
    let calendarButton = document.createElement("button");
    calendarButton.setAttribute("class", "calendar");
    calendarButton.setAttribute("style", "display: none");
    return calendarButton;
}

function createExclamationButton () {
    let exclamationButton = document.createElement("button");
    exclamationButton.setAttribute("class", "exclamation");
    exclamationButton.setAttribute("style", "display: none");
    exclamationButton.addEventListener("click", givePriority);
    return exclamationButton;
}

function createTrashButton () {
    let trashButton = document.createElement("button");
    trashButton.setAttribute("class", "trash");
    trashButton.setAttribute("style", "display: none");
    trashButton.addEventListener("click", deleteTodo);
    return trashButton;
}



function createArrowIcon () {
    let arrowIcon = document.createElement("i");
    arrowIcon.setAttribute("class", "fas fa-arrow-circle-right arrow-icon");
    return arrowIcon;
}


function createPencilIcon () {
    let pencilIcon = document.createElement("i");
    pencilIcon.setAttribute("class", "fas fa-pencil-alt pencil-icon");
    return pencilIcon;
}


function createCalendarIcon () {
    let calendarIcon = document.createElement("i");
    calendarIcon.setAttribute("class", "far fa-calendar-alt calendar-icon");
    return calendarIcon;
}


function createExclamationIcon () {
    let exclamationIcon = document.createElement("i");
    exclamationIcon.setAttribute("class", "fas fa-exclamation exclamation-icon");
    return exclamationIcon;
}

function createTrashIcon () {
    let trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fas fa-trash-alt trash-icon");
    return trashIcon;    
}



function addTodo () {
    let todoListUl = document.getElementById("todo-lists-ul");
    let warning = document.getElementById("warning-empty");

    if (getInputValue() === "") {
        warning.textContent = "Please enter a todo item!";
    } 
    else {
        let todoTextP = createTodoTextP();
        todoTextP.textContent = getInputValue();

        let todoItem = createTodoItem();
        let todoItemContainer = createTodoItemContainer();
        let todoTextContainer = createTodoTextContainer();
        let iconContainer = createIconContainer();
        let todoText = createTodoText();
        let todoAttribute = createTodoAttribute();

        let arrowButton = createArrowButton();
        let pencilButton = createPencilButton();
        let calendarButton = createCalendarButton();
        let exclamationButton = createExclamationButton();
        let trashButton = createTrashButton();


        todoListUl.appendChild(todoItem);
        todoItem.appendChild(todoItemContainer);
        todoItemContainer.appendChild(todoTextContainer);
        todoItemContainer.appendChild(iconContainer);
        todoTextContainer.appendChild(todoText);
        todoTextContainer.appendChild(todoAttribute);
        todoText.appendChild(createHeartIcon());
        todoText.appendChild(todoTextP);
        todoAttribute.appendChild(createDate("2018.11.04"));
        todoAttribute.appendChild(createPriority("priority"));
        iconContainer.appendChild(arrowButton);
        iconContainer.appendChild(pencilButton);
        iconContainer.appendChild(calendarButton);
        iconContainer.appendChild(exclamationButton);
        iconContainer.appendChild(trashButton);
        arrowButton.appendChild(createArrowIcon());
        pencilButton.appendChild(createPencilIcon());
        calendarButton.appendChild(createCalendarIcon());
        exclamationButton.appendChild(createExclamationIcon());
        trashButton.appendChild(createTrashIcon());
    }
}


//showing additional 4 icons(buttons) when the arrow icon is clicked
function addFourIcons () {
    let arrowButton = event.currentTarget;

    if (arrowButton.parentNode.children[1].style.display === "none" &&
        arrowButton.parentNode.children[2].style.display === "none" &&
        arrowButton.parentNode.children[3].style.display === "none" &&
        arrowButton.parentNode.children[4].style.display === "none") {

            arrowButton.parentNode.children[1].style.display = "flex";
            arrowButton.parentNode.children[2].style.display = "flex";
            arrowButton.parentNode.children[3].style.display = "flex";
            arrowButton.parentNode.children[4].style.display = "flex";
    }

}


//show-hide priority when the pencil icon is clicked
function givePriority () {
    let exclamationButton = event.currentTarget;

    if (exclamationButton.parentNode.previousSibling.children[1].children[1].style.display === "block") {
        
        exclamationButton.parentNode.previousSibling.children[1].children[1].style.display = "none";
        hideFourIcons(exclamationButton);
    } 
    else {
        exclamationButton.parentNode.previousSibling.children[1].children[1].style.display = "block";
        hideFourIcons(exclamationButton);
    }
}


function deleteTodo () {
    event.currentTarget.parentNode.parentNode.parentNode.remove();
}


//when one of the four icons is clicked, they disappear after clicking
function hideFourIcons (actualEvent) {
    actualEvent.parentNode.children[1].style.display = "none";
    actualEvent.parentNode.children[2].style.display = "none";
    actualEvent.parentNode.children[3].style.display = "none";
    actualEvent.parentNode.children[4].style.display = "none";
}



function editTodoTextP () {
    let pencilButton = event.currentTarget;
    setContenteditableToTodoTextP(pencilButton);
}


function setContenteditableToTodoTextP (actualEvent) {
    actualEvent.parentNode.previousSibling.children[0].children[1].setAttribute("contenteditable", "true");
   
    //changing background of todoTextP when we want to edit the text
    actualEvent.parentNode.previousSibling.children[0].children[1].style.backgroundColor = "white";
    actualEvent.parentNode.previousSibling.children[0].children[1].style.border = "2px solid #f7d3ba";
    actualEvent.parentNode.previousSibling.children[0].children[1].style.padding = "5px";
    
}