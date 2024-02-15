// constants for query selector
const studentIdParagraph = document.querySelector('#id200493106');
const customNumberInput = document.querySelector('#customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.querySelector('#imageSelect');
const displayImage = document.querySelector('#images');
const body = document.body;
const imageSources = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

// function to change bg color from user input and add student id
function changeCustomColor() {
    studentIdParagraph.textContent = 'id200493106';

    let value = customNumberInput.value;
    let color;
    if (value < 0 || value > 100) color = 'red';
    else if (value <= 20) color = 'green';
    else if (value <= 40) color = 'blue';
    else if (value <= 60) color = 'orange';
    else if (value <= 80) color = 'purple';
    else color = 'yellow';

    document.body.style.backgroundColor = color;
    
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 101); 
    customNumberInput.value = randomValue; 
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const existingOptions = imageSelect.querySelectorAll('option');
    if (existingOptions.length <= 1) { 
        imageSources.forEach((src) => {
            const option = document.createElement('option');
            option.value = src;
            option.textContent = src;
            imageSelect.appendChild(option);
        });
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    if (selectedImage) {
        displayImage.src = selectedImage; 
    }
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener('focus', addList); 
imageSelect.addEventListener('change', changeImage);