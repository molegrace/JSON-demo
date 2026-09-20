// 1. Imagine this long string came directly across the internet from an API
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

function processApiData() {
  try {
    console.log("Simulating API text conversion...");

    // 2. This does exactly what response.json() does under the hood!
    const user = JSON.parse(fakeWebResponseText);

    // 3. Print the data to your terminal
    console.log("\n--- Mock Internet Data Processed! ---");
    console.log(`Name:    ${user.name}`);
    console.log(`Email:   ${user.email}`);
    console.log(`City:    ${user.address.city}`);
    console.log(`Company: ${user.company.name}`);

  } catch (error) {
    console.error("\n❌ Error processing JSON:", error.message);
  }
}

processApiData();
