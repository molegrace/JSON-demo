fetch('car.json')
  .then(response => response.json())
  .then(car => {
    
    // Inject Car Properties
    document.getElementById('car-title').innerText = `${car.make} ${car.model}`;
    document.getElementById('car-color').innerText = car.color;
    document.getElementById('car-weight').innerText = car.weight;
    document.getElementById('car-speed').innerText = car.topSpeed;
    
    // Inject the main Car Image URL
    document.getElementById('car-image').src = car.imageUrl;

    // DIG INTO NESTED OBJECT: Inject Owner text details
    document.getElementById('owner-name').innerText = car.owner.name;
    document.getElementById('owner-location').innerText = `${car.owner.city}, Tanzania`;

    // NEW: Inject the nested owner avatar photo URL!
    document.getElementById('owner-avatar').src = car.owner.avatarUrl;

  })
  .catch(error => {
    console.error("Error pulling car tracking database:", error);
  });
