const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // you need to fill in the blank to reference the HTML element that is a unordered list element.

const li = document.createElement('li');
const deleteButton = document.createElement('button');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
    }
});