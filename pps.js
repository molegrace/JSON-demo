// APIs take time to respond, so we use an 'async' function to handle the wait
async function getLiveUserData() {
    try {
      console.log("Connecting to the internet API...");
  
      // 1. Fetch the raw response from the live web API
      const response = await fetch('https://randomuser.me');
  
      // 2. Extract the JSON data from that response
      const data = await response.json();
  
      // 3. Dig into the JSON structure to find the user's details
      // The API wraps users inside an array called 'results'
      const randomUser = data.results[0];
  
      // 4. Extract specific pieces of data
      const firstName = randomUser.name.first;
      const lastName = randomUser.name.last;
      const email = randomUser.email;
      const city = randomUser.location.city;
  
      // 5. Print the live data to the terminal!
      console.log("\n--- Live Data Received! ---");
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Email: ${email}`);
      console.log(`Location: ${city}`);
  
    } catch (error) {
      console.error("Oops! Something went wrong:", error);
    }
  }
  
  // Run our function
  getLiveUserData();
  