document.addEventListener('DOMContentLoaded', () => {
    // Fetch the local JSON data
    fetch('i-scream.json')
      .then(response => response.json())
      .then(data => {
        displayFlavors(data.topFlavors);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  
  // Function to display the flavours dynamically
  function displayFlavors(flavors) {
    const container = document.getElementById('flavor-container');
    flavors.forEach(flavor => {
      const card = document.createElement('div');
      card.className = 'flavor-card';
  
      card.innerHTML = `
        <img src="images/${flavor.image}" alt="${flavor.name}" class="flavor-image">
        <h3>${flavor.name}</h3>
        <p><strong>Calories:</strong> ${flavor.calories}</p>
        <p><strong>Type:</strong> ${flavor.type}</p>
        <p><strong>Ingredients:</strong> ${flavor.ingredients.join(', ')}</p>
      `;
  
      container.appendChild(card);
    });
  }
  