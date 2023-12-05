//Create input for name
const form = document.createElement('form');
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name: ';
const nameInput = document.createElement('input');
nameInput.id = 'nameInput';
nameInput.type = 'text';
form.appendChild(nameLabel);
form.appendChild(nameInput);
//Move to next line
form.appendChild(document.createElement('br'));

//Create input for e-mail
const emailLabel = document.createElement('label')
emailLabel.textContent = 'Email: '
const emailInput = document.createElement('input');
emailInput.id = 'emailInput';
emailInput.type = 'text';
form.appendChild(emailLabel);
form.appendChild(emailInput);
//Move to next line
form.appendChild(document.createElement('br'));

//Create input for goal
const goalLabel = document.createElement('label')
goalLabel.textContent = ' Goal: '
const goalInput = document.createElement('input');
goalInput.id = 'goalInput';
goalInput.type = 'text';
form.appendChild(goalLabel);
form.appendChild(goalInput);
//Move to next line
form.appendChild(document.createElement('br'));

// Create submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.addEventListener('click', handleSubmit);
form.appendChild(submitButton);

//Add user info to console
function handleSubmit(event){
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const goal = document.getElementById('goalInput').value;
    if (validEmail(email)){
        console.log(name);
        console.log(email);
        console.log(goal);
        window.alert("Information collected. Thank you.")
    }else{
        window.alert("Email is invalid.");
    }
};
//check email
function validEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
//Create input for meals
function createInput(labelText, inputId, inputType){
    const label = document.createElement('label');
    label.textContent = labelText + ':';

    const input = document.createElement('input');
    input.id = inputId;
    input.type = inputType;
    
    form.appendChild(label);
    form.appendChild(input);
};
//use backticks not quotations to get info from list
function weekPlan(){
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let x in weekDays){
        const dayPar = document.createElement('p');
        dayPar.textContent = `${weekDays[x]}:`;
        form.appendChild(dayPar);
        createInput('Breakfast', `break${weekDays[x]}`, 'text');
        form.appendChild(document.createElement('br'));
        createInput('Snack', `snack${weekDays[x]}`, 'text');
        form.appendChild(document.createElement('br'));
        createInput('Lunch', `lunch${weekDays[x]}`, 'text');
        form.appendChild(document.createElement('br'));
        createInput('Snack', `snack2${weekDays[x]}`, 'text');
        form.appendChild(document.createElement('br'));
        createInput('Dinner', `dinner${weekDays[x]}`, 'text');
        form.appendChild(document.createElement('br'));
    }
};
weekPlan();
// Create form button
var mealButton = document.createElement("input");
mealButton.id = "buttonMeal"
mealButton.setAttribute("type", "submit");
mealButton.setAttribute("value","Create Meal Plan");
form.appendChild(document.createElement('br'));
form.appendChild(mealButton);
/*clear data couldn't get it to work
var clearButton = document.createElement('button')
clearButton.textContent = 'Clear Week';
submitButton.addEventListener('click', reloadButton());
function reloadButton(){
    window.location.reload();
    window.stop();
}
form.appendChild(clearButton);
*/

//Append form to html body
document.body.appendChild(form);

//Get input for meal plan and open new window
document.getElementById('buttonMeal').addEventListener('click', function(){
    const mealWindow = window.open("", "MealPlan");
    mealWindow.document.write("<head><h1>Your Weekly Meal Plan</h1>");
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let x in weekDays){
        const day = weekDays[x];
        const breakfast = document.getElementById(`break${day}`).value;
        const snack = document.getElementById(`snack${day}`).value;
        const lunch = document.getElementById(`lunch${day}`).value;
        const snack2 = document.getElementById(`snack2${day}`).value;
        const dinner = document.getElementById(`dinner${day}`).value;

        mealWindow.document.write('<title>Weekly Meal Plan</title><link rel="stylesheet" type="text/css" href="mealStyle.css"></head>');
        mealWindow.document.write(`<h2>${day}</h2>`);
        mealWindow.document.write(`<p>Breakfast: ${breakfast}</p>`);
        mealWindow.document.write(`<p>Snack: ${snack}</p>`);
        mealWindow.document.write(`<p>Lunch: ${lunch}</p>`);
        mealWindow.document.write(`<p>Snack: ${snack2}</p>`);
        mealWindow.document.write(`<p>Dinner: ${dinner}</p>`);
        }
    mealWindow.document.write(`<button onclick="window.print()" id ="printButton">Print</button>`);
    mealWindow.document.write(`<button id="downLbutton">Download</button>`);
});