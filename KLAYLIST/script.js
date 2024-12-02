// Array of featured albums
const albums = [
    {
      image: "../KLAYLIST/covers/CHROMAKOPIA.png",
      title: "CHROMAKOPIA",
      description: "Tyler, The Creator",
      link: "#album1"
    },
    {
      image: "../KLAYLIST/covers/GNX.png",
      title: "GNX",
      description: "Kendrick Lamar",
      link: "#album2"
    },
    {
      image: "../KLAYLIST/covers/i lay my life down for you.png",
      title: "I LAY MY LIFE DOWN FOR YOU",
      description: "JPEGMAFIA",
      link: "#album3"
    },
    {
        image: "../KLAYLIST/covers/BLUE LIPS.png",
        title: "BLUE LIPS",
        description: "ScHoolboy Q",
        link: "#album4"
    },
    {
        image: "../KLAYLIST/covers/Dark Times.png",
        title: "Dark Times",
        description: "Vince Staples",
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

// Dropdown

document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownMenu = toggle.nextElementSibling;
    dropdownMenu.classList.toggle('show');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      menu.classList.remove('show');
    });
  }
});

// Quote Generator

function randomText() {
    // Array of text options
    const texts = [
        "I hope you're having a great day today!",
        "Doesn't the desktop version of this look nice?",
        "The day is beautiful, enjoy this day!",
        "Did you meditate today? I strongly recommend it. \nEven if just for a moment.",
        "Thank you for visiting!",
        "2@85 697 +@; 43@$ 5(8#?",
        "What's on the menu today?",
        "Hello there, and how've you been?",
        "Are you the chum with dry skin?",
    ];
    
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * texts.length);
    
    // Insert random text into the element
    document.getElementById("randomText").innerText = texts[randomIndex];
}

// Run the function when the page loads
window.onload = randomText;


// Dynamic Age 

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed = 
      today.getMonth() > birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
  if (!hasBirthdayPassed) {
      age--; // Subtract 1 if the birthday hasn't passed this year
  }
  return age;
}

function updateAge() {
  const birthDate = new Date("2000-05-15"); // Replace with your birth date
  const ageElement = document.getElementById("age");
  ageElement.textContent = calculateAge(birthDate);
}

updateAge();