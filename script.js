document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("disclaimer-modal");
    const agreeBtn = document.getElementById("agree-btn");
  
    // Check if the user has already agreed to the disclaimer
    if (localStorage.getItem("agreedToDisclaimer") === "true") {
      modal.style.display = "none"; // Hide modal if already agreed
    } else {
      modal.style.display = "block"; // Show modal if not agreed yet
    }
  
    // Event listener for the 'I AGREE' button
    agreeBtn.addEventListener("click", function () {
      localStorage.setItem("agreedToDisclaimer", "true"); // Set the flag in localStorage
      modal.style.display = "none"; // Hide the modal
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
  
    // Toggle the navbar display on hamburger click
    hamburger.addEventListener("click", function () {
      navbar.classList.toggle("expanded");
    });
  
    // Optional: Close the navbar when a link is clicked
    navbar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("expanded");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    new Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: ".dots",
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, idx) => {
        slide.style.display = "none";
        dots[idx].classList.remove("active");
      });
      slides[index].style.display = "block";
      dots[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    nextButton.onclick = function () {
      nextSlide();
    };
  
    prevButton.onclick = function () {
      prevSlide();
    };
  
    dots.forEach((dot, i) => {
      dot.onclick = function () {
        currentSlide = i;
        showSlide(currentSlide);
      };
    });
  
    // Initialize the first slide
    showSlide(currentSlide);
  });
  document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 3000); // Automatic slide transition every 3 seconds

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none'; // Hide all slides
        });
        slides[index].style.display = 'block'; // Show the active slide
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Increment or wrap around
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement or wrap around
        showSlide(currentIndex);
    }

    // Optional: Adding event listeners for next and previous buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot"); // Get all the dots
  const pauseButton = document.querySelector(".pause");
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000);
  let isPlaying = true;

  function showSlide(index) {
      // Hide all slides
      slides.forEach((slide, idx) => {
          slide.style.display = "none";
          dots[idx].classList.remove("active"); // Remove active class from all dots
      });
      // Show the current slide and highlight the corresponding dot
      slides[index].style.display = "block";
      dots[index].classList.add("active"); // Add active class to the current dot
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  function pauseSlideshow() {
      pauseButton.textContent = 'Play';
      clearInterval(slideInterval);
      isPlaying = false;
  }

  function playSlideshow() {
      pauseButton.textContent = 'Pause';
      slideInterval = setInterval(nextSlide, 15000);
      isPlaying = true;
  }

  pauseButton.addEventListener('click', function () {
      if (isPlaying) {
          pauseSlideshow();
      } else {
          playSlideshow();
      }
  });

  // Initialize the first slide and corresponding dot
  showSlide(currentSlide);
});
