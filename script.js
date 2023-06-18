// Get current time
const currentTime = new Date();
const currentHour = currentTime.getHours();

// Get the sky and sun-moon elements
const skyElement = document.querySelector('.sky');
const sunMoonElement = document.querySelector('.sun-moon');

// Check if it's nighttime
if (currentHour >= 18 || currentHour < 6) {
  document.body.classList.add('moon');
  skyElement.classList.add('moon');
}

// Generate snowflakes
const snowfallElement = document.querySelector('.snowfall');
const numSnowflakes = 50;

for (let i = 0; i < numSnowflakes; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.animationDelay = `${Math.random() * 5}s`;
  snowfallElement.appendChild(snowflake);
}

function toggleDayNight() {
    const body = document.body;
    const sky = document.querySelector('.sky');
    const house = document.querySelector('.house');
  
    // Check if it's night time
    if (isNightTime()) {
      // Add the "moon" class to the body
      body.classList.add('moon');
      // Add the "night" class to the sky
      sky.classList.add('night');
      // Add the "fireplace-on" class to the house
      house.classList.add('fireplace-on');
    } else {
      // Remove the "moon" class from the body
      body.classList.remove('moon');
      // Remove the "night" class from the sky
      sky.classList.remove('night');
      // Remove the "fireplace-on" class from the house
      house.classList.remove('fireplace-on');
    }
  }
