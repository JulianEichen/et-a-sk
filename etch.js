const container = document.querySelector('.container');

const grid_size = 16*16;

for (var i=0; i<grid_size;i++){
    const div = document.createElement('div');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'white';
    });
    container.appendChild(div);
}






