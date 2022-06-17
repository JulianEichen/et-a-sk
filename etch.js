const grid = document.querySelector('.grid');

// Create the default grid
create_grid();

function create_grid(length=16){
    const grid_size = length*length;

    // cleare grid
    const current_squares = document.querySelectorAll('.square');
    current_squares.forEach((square) => {
        grid.removeChild(square);
    })

    // prepare style
    document.documentElement.style.setProperty('--grid_length', length);

    // fill grid
    for (var i = 0; i < grid_size; i++) {
        const div = document.createElement('div');
        div.className = "square";
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'white';
        })
        grid.appendChild(div);
    }
}

// Create the menu
const change_size = document.querySelector('.change_size');
change_size.addEventListener('click', resize_grid);

const toggle_grid = document.querySelector('.toggle_grid');
toggle_grid.addEventListener('click', toggle_borders);

// Menu functions
function resize_grid() {
    var length = Math.min(prompt("Please enter a new length for the grid. (max 100)", 16), 100);
    create_grid(length);
}

function toggle_borders(){
    const style = getComputedStyle(document.documentElement).getPropertyValue('--grid_border_style');
    console.log(style);
    if (getComputedStyle(document.documentElement).getPropertyValue('--grid_border_style') == "solid"){
        document.documentElement.style.setProperty('--grid_border_style', "hidden");
    }else{
        document.documentElement.style.setProperty('--grid_border_style', "solid");
    }
}




