// Function to add a new action
function addAction() {
    const color = document.querySelector('input[name="color"]:checked').value;
    const action = document.getElementById('action').value;
    displayAction(color, action);
}

// Variable that count the amount of planned actions
let actionCounter = 0;

// Function to display a new action
function displayAction(color, action) {
    let loc = document.getElementById('actionCol3');;
    if (actionCounter < 10) {
        loc = document.getElementById('actionCol1');
    } else if (actionCounter < 20) {
        loc = document.getElementById('actionCol2');
    }

    let temp = document.createElement("div");
    temp.classList.add("actionHolder");

    temp.innerHTML =
        `<div class="colorCircle ${color}"></div>
        <p class="actionName">${action}</p>`;

    loc.appendChild(temp);
    actionCounter++;
}

// Function to reset the actions
function resetActions() {
    location.reload();
}
