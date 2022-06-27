const grid = document.querySelector('.grid');

// Create the default grid
document.documentElement.style.setProperty('--grid_brush_color', 'white')
create_grid();

function create_grid(length=getComputedStyle(document.documentElement).getPropertyValue('--grid_length')){
    const grid_size = length*length;
    color = getComputedStyle(document.documentElement).getPropertyValue('--grid_brush_color');
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
            div.style.backgroundColor = color;
        })
        grid.appendChild(div);
    }
}

// Create the menu
const change_size = document.querySelector('.change_size');
change_size.addEventListener('click', resize_grid);

const toggle_grid = document.querySelector('.toggle_grid');
toggle_grid.addEventListener('click', toggle_borders);

document.getElementById("dropdown").addEventListener('change', select_brush);


// Menu functions
function resize_grid() {
    var length = Math.min(prompt("Please enter a new length for the grid. (max 100)", 16), 100);
    document.documentElement.style.setProperty('--grid_length', length);
    create_grid(length);
}

function toggle_borders(){
    const style = getComputedStyle(document.documentElement).getPropertyValue('--grid_border_style');
    if (getComputedStyle(document.documentElement).getPropertyValue('--grid_border_style') == "solid"){
        document.documentElement.style.setProperty('--grid_border_style', "hidden");
    }else{
        document.documentElement.style.setProperty('--grid_border_style', "solid");
    }
}


function select_brush(){
    var selectedOption = this.options[this.selectedIndex].value;
    document.documentElement.style.setProperty('--grid_brush_color', selectedOption);
    
    // change listeners
    const current_squares = document.querySelectorAll('.square');
    current_squares.forEach((square) => {
        square.removeEventListener('mouseover', () => {
            div.style.backgroundColor = 'white';
        });
        
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = selectedOption;
        }); 
    })
    
}






