// 1. We ask the browser to fetch the actual local file
fetch('profile.json')
  .then(response => {
    // 2. Convert the file contents into a usable JavaScript object
    return response.json();
  })
  .then(data => {
    // 3. Inject that data straight into our HTML elements!
    document.getElementById('user-name').innerText = data.user;
    document.getElementById('user-email').innerText = data.email;
    document.getElementById('user-city').innerText = data.city;

    // 4. Handle our dynamic badge status
    const badgeElement = document.getElementById('badge');
    if (data.isemployee) {
        badgeElement.innerText = "Active Employee";
    } else {
        badgeElement.innerText = "Contractor";
    }
  })
  .catch(error => {
    console.error("Could not read the JSON file:", error);
  });
