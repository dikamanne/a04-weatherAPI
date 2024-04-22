

// Function to fetch weather data from the API
// Function to fetch weather data from the API
async function getWeather() {
    const apiKey = 'e3893bedbfc849ff944222829242204'; // Replace 'YOUR_API_KEY' with your actual API key
    const city = 'London'; // Example city
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Update the DOM with weather information
        document.getElementById('weather').innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Display an error message on the page
        document.getElementById('weather').innerHTML = 'Error fetching weather data. Please try again later.';
    }
}


// Function to fetch news articles from the API
async function getNews() {
    const apiKey = '6c71f3d53cbc415ba2c64902aae10759';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Update the DOM with news articles
        document.getElementById('news').innerHTML = `
            <h2>Top News Headlines</h2>
            <ul>
                ${data.articles.map(article => `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`).join('')}
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
}

// Call the functions to fetch weather and news data when the page loads
window.addEventListener('load', () => {
    getWeather();
    getNews();
});
