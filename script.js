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
  snowfallElement.appendChild(snowflake);
}
