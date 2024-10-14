console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', () => {
  fetchDogImages();
  fetchDogBreeds();
});

// Function to fetch dog images and render them
function fetchDogImages() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const dogImageContainer = document.getElementById('dog-image-container');
      data.message.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        dogImageContainer.appendChild(imgElement);
      });
    })
    .catch(error => console.error('Error fetching dog images:', error));
}

// Challenge 2: Fetch and display dog breeds
function fetchDogBreeds() {
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const dogBreedsList = document.getElementById('dog-breeds');
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const liElement = document.createElement('li');
        liElement.textContent = breed;
        liElement.addEventListener('click', () => {
          liElement.style.color = 'blue'; // Change color on click
        });
        dogBreedsList.appendChild(liElement);
      });

      // Challenge 4: Add filter functionality
      const dropdown = document.getElementById('breed-dropdown');
      dropdown.addEventListener('change', () => {
        const selectedLetter = dropdown.value;
        filterBreedsByLetter(selectedLetter, breeds);
      });
    })
    .catch(error => console.error('Error fetching dog breeds:', error));
}

// Function to filter breeds based on selected letter
function filterBreedsByLetter(letter, breeds) {
  const dogBreedsList = document.getElementById('dog-breeds');
  dogBreedsList.innerHTML = ''; // Clear current list

  const filteredBreeds = breeds.filter(breed => breed.startsWith(letter));
  filteredBreeds.forEach(breed => {
    const liElement = document.createElement('li');
    liElement.textContent = breed;
    liElement.addEventListener('click', () => {
      liElement.style.color = 'blue'; // Change color on click
    });
    dogBreedsList.appendChild(liElement);
  });
}