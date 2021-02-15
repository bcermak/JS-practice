document.body.setAttribute('style', "background-color: lightpink")

const header = document.querySelector('h2');

header.style = 'text-align: center;'

const newDiv = document.createElement('div');

document.body.appendChild(newDiv);

newDiv.setAttribute('style', 'text-align: center');

function addInput () {
    let input = document.createElement('input');
    input.id = 'dynamicInput';
    input.type = 'text';
    input.name = 'hello';
    input.placeholder = "Hello";
    newDiv.appendChild(input);
}

addInput ();

function addBtn () {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = "Hello World";
    btn.setAttribute('style', "margin-left: 10px;");
    btn.addEventListener('click', function () {
        alert("Herro World");
        console.log("Herro World");
        let par = document.createElement('p');
        par.innerHTML = "Hello World";
        newDiv.appendChild(par);
    })
    newDiv.appendChild(btn);
};

addBtn ();
