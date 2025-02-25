"use strict";

let list = [];

const todolist = document.querySelector('.contenttable');
const btnadd = document.getElementById('sendtask');
const btnreset = document.getElementById('resettask');

table();

btnreset.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(list);
    btnreset.classList.add('disabled');
    btnreset.classList.remove('enabled');
    list = []
    console.log(list);
    table();
})

function table() {
    if(list.length != 0){
        btnreset.classList.remove('disabled');
        btnreset.classList.add('enabled');
        todolist.innerHTML = '';
        for(let i = 0; i< list.length; i++ ){
            todolist.innerHTML += `
            <li class="task" value='${i}'>
            <p>${list[i]?.task}</p>
            <button data-index='${i}' class='deletetask'> X </button>
            </li>
                `;
                console.log(list[i])
            }}
            else if(list.length === 0){
                todolist.innerHTML = `<div class="listempty">Nothing to do</div>`;
            }
            // btndelete.forEach(btn => {
            //     btn.addEventListener('click', async (e) => {
            //         e.preventDefault(); 
            //         const taskI =await e.target.dataset.index;
            //         console.log(list);
            //         list.splice(taskI, 1);
            //         console.log('delete');
            //         table();
            //     });
            // });
        }
        
    btnadd.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.getElementById('tasktodo').value !== ''){
            const tasktodo = {
                task: document.getElementById('tasktodo').value,
            };
            console.log(list);
            console.log(tasktodo);
            list.push(tasktodo);
            document.getElementById('tasktodo').value = '';
            table();
        }
        else{
            alert('Insert a correct value, please.')
            document.getElementById('tasktodo').value='';
        }
    });

// const btndelete = document.querySelectorAll('.deletetask');


todolist.addEventListener('click', (e) => {
    if (e.target.classList.contains('deletetask')) { // Check if delete button was clicked
        e.preventDefault();
        e.stopPropagation();

        const taskI = e.target.dataset.index; // Get index from dataset
        list.splice(taskI, 1); // Remove item from list
        console.log(list);

        table(); // Re-render the list
    }
});
