alert('Hi! Are you ready to drive?');

//Prompts user to input age
let age = Number(prompt('What\'s your current age?'));

//If user's age is below 18, car powers off.
if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off!');
    document.write('We noticed you\'re too young to drive. <br>Please move to the passenger\'s seat');
}

//If user's age is 18, user is congratulated and car powers on.
else if (age === 18) {
    alert('Congratulations on your first year of driving. Fasten your seat belt and enjoy your ride.');
    document.write('Enjoy your first year of driving. <br>Please don\'t compete with anyone on the road, this is not a video game.');
}

//If user's age is above 18, car powers on.
else if (age > 18) {
    alert('Powering on! Fasten your seat belt and enjoy your ride.');
    document.write('Wearing a seatbelt is extremely important.');
}

else {
    alert('Try again with a valid value');
    document.write('Refresh the page and input a valid value.');
}