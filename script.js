// 1. Fetch our complete JSON array file
fetch('cars.json')
  .then(response => response.json())
  .then(carArray => {
    
    // Find the main container we created in HTML
    const gridContainer = document.getElementById('grid-container');

    // 2. Loop through every single car object inside the array
    carArray.forEach(car => {
        
        // Create a new div element to hold the car card layout structure
        const cardElement = document.createElement('div');
        cardElement.className = 'car-card';

        // 3. Construct the HTML layout dynamically using template strings
        cardElement.innerHTML = `
            <img src="${car.imageUrl}" alt="${car.make}" class="car-img">
            <div class="car-info">
                <h2>${car.make} ${car.model}</h2>
                <div class="specs">
                    <p><strong>Color:</strong> ${car.color}</p>
                    <p><strong>Weight:</strong> ${car.weight}</p>
                    <p><strong>Top Speed:</strong> ${car.topSpeed}</p>
                </div>
                <div class="owner-box">
                    <h3>Registered Owner</h3>
                    <div class="owner-profile-layout">
                        <img src="${car.owner.avatarUrl}" alt="Owner" class="owner-avatar-img">
                        <div class="owner-details">
                            <p class="owner-name">${car.owner.name}</p>
                            <p class="owner-location">${car.owner.city}, TZ</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 4. Inject this new card directly into our grid wrapper
        gridContainer.appendChild(cardElement);
    });

  })
  .catch(error => {
    console.error("Error generating car matrix dashboard:", error);
  });
