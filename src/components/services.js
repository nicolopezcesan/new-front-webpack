


// const getArticles = (url) => {let aa = {};
const fetchPromise = fetch('https://api-test-ln.herokuapp.com/articles');

const getArticles = async () => {
    fetchPromise.then(response => {
        return response.json();
    }).then(people => {
        aa = people;
        console.log(people);
    });
}




// const transformWeather = weather_data => {
//     const { humidity, temp } = weather_data.main;
//     const { speed } = weather_data.wind;
//     const weatherState = getWeatherState(weather_data.weather[0]);
//     const temperature = getTemp(temp);

//     const data = {
//         humidity,
//         temperature,
//         weatherState,
//         wind: `${speed} m/s`
//     };

//     return data;
// }

export default getArticles;