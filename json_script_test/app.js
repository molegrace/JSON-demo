const fs = require('fs');

// 1. Read the current JSON data and parse it into an object
const rawData = fs.readFileSync('profile.json', 'utf8');
const user = JSON.parse(rawData);

console.log(`Original name in file: ${user.user}`);

// 2. Change the data inside the JavaScript object
user.user = "Jane Doe"; // Changing the name from 'john doe' to 'Jane Doe'
user.age = 31;         // Let's also update the age while we are at it!

// 3. Convert the updated JavaScript object back into a text string
// The 'null, 2' arguments make the saved file look clean and indented
const updatedJSONText = JSON.stringify(user, null, 2);

// 4. Save the text string back into 'profile.json'
fs.writeFileSync('profile.json', updatedJSONText, 'utf8');

console.log("Success! The profile.json file has been automatically updated.");
