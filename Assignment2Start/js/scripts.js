// constants for query selector
const studentNumber = document.querySelector('#myStudentId');
const usersNumber = document.querySelector('#customNumber');
const customChange = document.querySelector('.custColor');
const randomChange = document.querySelector('.randColor');
const imgDropdown = document.querySelector('#imageSelect');
const imageContainer = document.querySelector('#images');

//Flag to determine whether list has been populated
let imageListCreated = false;

//Image object used in addList() and changeImage() to display photos store in img folder
const images = {'img1.jpg': "Sun beams down on the tall grass by a forest's clearing",
                        'img2.jpg': "Pink sky over the ocean during a sunset. Sun can be seen through branches of the tree.",
                        'img3.jpg': "Beautiful mountain scape over the lake.",
                        'img4.jpg': "Stag soaking up some sun.",
                        'img5.jpg': "River through the forest, fallen trees stretch across it."};

// function to change bg color from user input and add student id
function changeCustomColor() {
    studentNumber.textContent = "Richard LeBlanc: 200182873";

    //Default is red, check the truth of the statement, except when over 100.
    //if over 100 all cases will return true, so we check for false in that case 
    // in order to get to the default.

    switch (true && usersNumber.value <= 100){
        case usersNumber.value > 80:
            document.body.style.backgroundColor = 'yellow';
            break;
        case usersNumber.value > 60:
            document.body.style.backgroundColor = 'purple';
            break;
        case usersNumber.value > 40:
            document.body.style.backgroundColor = 'orange';
            break;
        case usersNumber.value > 20:
            document.body.style.backgroundColor = 'blue';
            break;
        case usersNumber.value > 0:
            document.body.style.backgroundColor = 'green';
            break;
        default:
            document.body.style.backgroundColor = 'red';
            break;
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    //Create an array of 3 numbers from 0 to 255 and use those random values to randomize the color of the background.
    const randomNums = Array.from( {length: 3}, () => Math.floor(Math.random() * 256));
    const color = `rgb(${randomNums[0]} ${randomNums[1]} ${randomNums[2]})`;
    document.body.style.backgroundColor = color;
}

// function to generate options for select list
function addList() {

    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array

    //If the list has not been generated create it;
    if (!imageListCreated){
        
        for (const key of Object.keys(images)){
            const thisImage = document.createElement("option");
            thisImage.value = key;
            thisImage.textContent = images[key].slice(0, 15) + "...";
            imgDropdown.appendChild(thisImage);
        }
        imageListCreated = true;
    }
    //Otherwise, do nothing. 
}

// function to change image
function changeImage() {
    //adjust the src and alt attributes of our image, and remove string if the default selection is retaken
    if(imgDropdown.value !== ''){
        imageContainer.src = "./img/" + imgDropdown.value;
        imageContainer.alt = images[imgDropdown.value];
    } else{
        imageContainer.src = "";
        imageContainer.alt = "";
    }
}

// event listeners for on click event of buttons and select
customChange.addEventListener("click", changeCustomColor);
randomChange.addEventListener("click", changeRandomColor);
imgDropdown.addEventListener("click", addList);
// event listeners for on change event of select
imgDropdown.addEventListener("change", changeImage)