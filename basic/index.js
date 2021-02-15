let newDiv = document.createElement('div');
newDiv.innerHTML = '<p> Hellllllllo World </p>';

document.body.appendChild(newDiv);

function addInput () {
    let input = document.createElement('input');
    input.id = 'dynamicInput';
    input.type = 'text';
    newDiv.appendChild(input);
}

addInput ();