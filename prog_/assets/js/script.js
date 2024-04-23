var typed = new Typed('#element', {
  strings: ["Think", "Design", "Create"],
  typeSpeed: 300,
  backSpeed: 100,
  backDelay: 2000,
  loop: true
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll('.links .link_');

  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Remove 'active' class from all items
      navItems.forEach(function (item) {
        item.classList.remove('link_btn');
      });

      // Add 'active' class to the clicked item
      this.classList.add('link_btn');
    });
  });
});


// Function to add leading zero if number is single-digit
function addLeadingZero(num) {
  return (num < 10 ? "0" : "") + num;
}

// Set the target date for the countdown
var targetDate = new Date("2024-12-31T23:59:59").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (5000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Add leading zero to single-digit numbers
  days = addLeadingZero(days);
  hours = addLeadingZero(hours);
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  // Display the countdown in the element with id="timer"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message and clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    alert("Spring Is Here!");
  }
}, 1000); // Update every 1 second


var swiper = new Swiper(".slider", {
  loop: true,
  autoplay: true,
  grabCursor: true,
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".testimony", {
  loop: true,
  grabCursor: true,
  autoplay: true,
  clickable: true,
  autoplay: {
    delay: 10000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".partner", {
  loop: true,
  autoplay: true,
  grabCursor: true,
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".blog_swiper", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 15000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});


