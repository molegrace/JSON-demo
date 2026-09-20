// 1. Bring in the File System module so we can save to our disk
const fs = require('fs');

const fakeWebResponseText = `
{
  "name": "Leanne Graham",
  "email": "sincere@april.biz",
  "address": {
    "city": "Gwenborough"
  },
  "company": {
    "name": "Romaguera-Crona"
  }
}
`;

function processAndSaveData() {
  try {
    console.log("Simulating API text conversion...");
    const user = JSON.parse(fakeWebResponseText);

    console.log("\n--- Mock Internet Data Processed! ---");
    console.log(`Name:  ${user.name}`);
    console.log(`Email: ${user.email}`);

    // 2. Prepare a new object structured exactly how we want our file to look
    const localProfileData = {
      user: user.name,
      email: user.email,
      city: user.address.city,
      isemployee: true // keeping your original property!
    };

    // 3. Convert our brand new object into clean, formatted JSON text
    const cleanJsonText = JSON.stringify(localProfileData, null, 2);

    // 4. Overwrite 'profile.json' with this fresh data
    fs.writeFileSync('profile.json', cleanJsonText, 'utf8');

    console.log("\n💾 Success! The 'profile.json' file has been updated with mock API data.");

  } catch (error) {
    console.error("\n❌ Error processing JSON:", error.message);
  }
}

processAndSaveData();
