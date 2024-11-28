// Array of featured albums
const albums = [
    {
      image: "ph.png",
      title: "Album Title 1",
      description: "This is a short description of Album 1.",
      link: "#album1"
    },
    {
      image: "ph.png",
      title: "Album Title 2",
      description: "This is a short description of Album 2.",
      link: "#album2"
    },
    {
      image: "ph.png",
      title: "Album Title 3",
      description: "This is a short description of Album 3.",
      link: "#album3"
    },
    {
        image: "ph.png",
        title: "Album Title 4",
        description: "This is a short description of Album 4.",
        link: "#album4"
    },
    {
        image: "ph.png",
        title: "Album Title 5",
        description: "This is a short description of Album 5.",
        link: "#album5"
    },
  ];
  
  // Function to display a random album
  function displayRandomAlbum() {
    const randomIndex = Math.floor(Math.random() * albums.length);
    const selectedAlbum = albums[randomIndex];
  
    // Update the DOM elements with the selected album's details
    document.getElementById("featured-image").src = selectedAlbum.image;
    document.getElementById("featured-image").alt = selectedAlbum.title;
    document.getElementById("featured-title").textContent = selectedAlbum.title;
    document.getElementById("featured-description").textContent = selectedAlbum.description;
    document.getElementById("featured-link").href = selectedAlbum.link;
  }
  
  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", displayRandomAlbum);
  

// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check and apply the user's saved theme preference from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";
}

// Add event listener to toggle theme
themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // Save the user's preference to localStorage
  localStorage.setItem("theme", isDarkMode ? "dark-mode" : "");
});

// This is specifically for the 🍔

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navItems = document.getElementById("nav-items");

  // Turn the menu on/Off :P
  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
  });
});

// THIS IS FOR FILTERING PLEASE!!! DON'T!!!! TOUCH!!!! THIS!!!

        const genreSelect = document.getElementById('genre-select');
        const cards = document.querySelectorAll('.card');

        genreSelect.addEventListener('change', () => {
            const selectedGenre = genreSelect.value;

            cards.forEach(card => {
                if (selectedGenre === 'all' || card.classList.contains(selectedGenre)) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        });

        // Show all cards by default
        genreSelect.dispatchEvent(new Event('change'));


// // Rating Section 

// const stars = document.querySelectorAll('.star-rating span');
// const result = document.getElementById('rating-result');

// // Load saved rating from localStorage if available
// document.addEventListener('DOMContentLoaded', () => {
//   const savedRating = localStorage.getItem('userRating');
//   if (savedRating) {
//     updateStars(savedRating);
//     result.textContent = `Rating: ${savedRating}`;
//   }
// });

// stars.forEach(star => {
//   // Click event
//   star.addEventListener('click', () => {
//     const rating = star.getAttribute('data-value');
//     updateStars(rating);
//     result.textContent = `Rating: ${rating}`;

//     // Save the rating in localStorage
//     localStorage.setItem('userRating', rating);
//   });

//   // Keyboard navigation
//   star.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter' || e.key === ' ') { // Space or Enter to select
//       const rating = star.getAttribute('data-value');
//       updateStars(rating);
//       result.textContent = `Rating: ${rating}`;

//       // Save the rating in localStorage
//       localStorage.setItem('userRating', rating);
//     }
//   });
// });

// // Helper function to update stars visually and for accessibility
// function updateStars(rating) {
//   stars.forEach(star => {
//     const value = star.getAttribute('data-value');
//     if (value <= rating) {
//       star.classList.add('active');
//       star.setAttribute('aria-checked', 'true');
//     } else {
//       star.classList.remove('active');
//       star.setAttribute('aria-checked', 'false');
//     }
//   });
// }