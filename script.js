//let color = "black";

function populateGrid(size){
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;

    let totalGridSize = size * size;

    for(let i=0;i<totalGridSize;i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener("mouseover",changeColorOfSquare);
    container.insertAdjacentElement('beforeend',square);
    }
}

populateGrid(16);

// Getting input from user
function changeSize(size){
    if(size >2  &&  size <100){
        populateGrid(size);
    }
    else{
        let Error = document.createElement('div');
        Error.innerHTML= "Please enter the valid size";
        inputUser = document.querySelector('.inputUser');
        inputUser.appendChild(Error);
    }
}


// changing the color of square divs
function changeColorOfSquare(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() *360},100%,50%)`;
  
    }
    else{
        this.style.backgroundColor = color;
    }
}



// changing the color according to the button click
function changeColor(choice){
    color = choice;
  
}

//function for reset
function resetGrid(){
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor ="#eee");
}