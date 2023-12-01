document.addEventListener("DOMContentLoaded", function () {
  // Section 1: Add to Favorites
  const addToFavouritesButtons = document.querySelectorAll("#favourites");

  // Loop through each button and add a click event listener
  addToFavouritesButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Find the closest image container
      const imageContainer = this.closest(".box");

      // Check if the image container is found
      if (!imageContainer) {
        console.error("Image container not found");
        return;
      }

      // Get the image source and title
      const imageSrc = imageContainer.querySelector(".image img").src;
      const imageTitle = imageContainer.querySelector(".content h3").innerText;

      // Call the saveImage function with the extracted information
      saveImage(imageSrc, imageTitle);
    });
  });

  // Function to save an image to favorites
  function saveImage(imageSrc, imageTitle) {
    // Retrieve existing favorites or initialize an empty array
    const favourites = JSON.parse(sessionStorage.getItem("favourites")) || [];

    // Create an object representing the image
    const image = { src: imageSrc, title: imageTitle };

    // Add the image to the favorites array
    favourites.push(image);

    // Save the updated favorites array to sessionStorage
    sessionStorage.setItem("favourites", JSON.stringify(favourites));

    // Display an alert to notify the user
    alert("Image saved to favorites!");
  }

  // Section 2: Display Saved Images
  const savedImagesContainer = document.getElementById(
    "saved-images-container"
  );

  // Retrieve saved images from sessionStorage or initialize an empty array
  const savedImages = JSON.parse(sessionStorage.getItem("favourites")) || [];

  // Check if there are saved images
  if (savedImages.length > 0) {
    // Call the displaySavedImages function to render saved images
    displaySavedImages(savedImages, savedImagesContainer);
  } else {
    // Call the displayNoSavedImagesMessage function to show a message
    displayNoSavedImagesMessage(savedImagesContainer);
  }
});

// Function to display saved images
function displaySavedImages(savedImages, container) {
  // Loop through each saved image and create corresponding elements
  savedImages.forEach(function (image) {
    const box = document.createElement("div");
    box.classList.add("box");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = "Saved Image";

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.innerText = image.title;

    imageContainer.appendChild(img);
    box.appendChild(imageContainer);
    content.appendChild(title);
    box.appendChild(content);
    container.appendChild(box);
  });
}

// Function to display a message when there are no saved images
function displayNoSavedImagesMessage(container) {
  const message = document.createElement("p");
  message.innerText = "No saved images.";
  container.appendChild(message);
}

// Liked code
const likeButtons = Array.from(document.querySelectorAll(".btn2"));

// Add click event listener to each like button
likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the 'liked' class to change the color
    button.classList.toggle("liked");
  });
});

// Drop-down menu
document.getElementById("mobile-menu").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
});

// jQuery Code

// Animation effects
$(document).ready(function () {
  // Hide the section initially
  $(".home").hide();

  // Apply animation when the section loads
  $(".home").fadeIn(1500);
});

// Function with chained effects
$(document).ready(function () {
  // Hide the section elements initially
  $(".about h1, .about .row").hide();

  // Apply chained effects to the section elements
  $(".btn").click(function (e) {
    e.preventDefault(); // Prevent the default link behavior
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    ); // Adjust the animation duration as desired
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load comments from session storage on page load
  loadComments();

  // Function to add a new comment
  window.addComment = function () {
    const commentInput = document.getElementById("comment");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
      // Get existing comments from session storage
      let comments = JSON.parse(sessionStorage.getItem("comments")) || [];

      // Add the new comment to the array
      comments.push(commentText);

      // Save the updated comments array to session storage
      sessionStorage.setItem("comments", JSON.stringify(comments));

      // Display the comments on the webpage
      displayComments();

      // Clear the comment input field
      commentInput.value = "";
    }
  };

  // Function to load comments from session storage
  function loadComments() {
    const comments = JSON.parse(sessionStorage.getItem("comments")) || [];
    const commentsContainer = document.getElementById("comments");

    // Display each comment on the webpage
    comments.forEach(function (comment) {
      const commentElement = document.createElement("div");
      commentElement.className = "comment";
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });
  }

  // Function to display comments on the webpage
  function displayComments() {
    const comments = JSON.parse(sessionStorage.getItem("comments")) || [];
    const commentsContainer = document.getElementById("comments");

    // Clear the existing comments on the webpage
    commentsContainer.innerHTML = "";

    // Display each comment on the webpage
    comments.forEach(function (comment) {
      const commentElement = document.createElement("div");
      commentElement.className = "comment";
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });
  }
});
