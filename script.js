//Variable declaration
const createNote = document.getElementById('createNote');
const noteContainer = document.querySelector('.noteContainer');
const noteInput = document.querySelector('.noteInput');


//Update data
function getData(){
    noteContainer.innerHTML = localStorage.getItem('notes');
}
getData()
function updateData(){
    localStorage.setItem('notes', noteContainer.innerHTML)
}
//Event Listeners
createNote.addEventListener('click', ()=>{
    let noteInput = document.createElement('p');
    let image = document.createElement('img');
    noteInput.className = 'noteInput';
    noteInput.setAttribute('contenteditable', 'true');
    image.src = 'images/delete.png';
    noteContainer.appendChild(noteInput).appendChild(image);
})
noteContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateData()
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.noteInput')
        notes.forEach(nt => {
            nt.onkeyup = ()=>{
                updateData()
            }
        });
    }
})

document.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})