import React, { useEffect, useState } from 'react';

function ReactApp() {

  const API_KEY = '16a3f59710922d6a63147cb85203dbb9';

  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState('');
  const [inputCityName, setInputCityName] = useState('');
  const [loading, setLoading] = useState(false);



  function getLocationWeather() {

    async function accept(position) {

      const { latitude, longitude } = position.coords;

      try {

        const URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;

        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Unable To Reverse Geocode Location');
        }

        const data = await response.json();
        const detectedCity = data[0]?.name || 'Unknown Location';

        setCityName(detectedCity.slice(0,detectedCity.indexOf(' ')));

      }
      catch (err) {
        setWeatherData({
          error: 'Unable To Fetch City Name From Location.',
        });
      }
    }


    function reject(error) {

      (error.code === error.PERMISSION_DENIED)
        ?
        setWeatherData({
          error: 'Location Access Denied. Please Allow Location Permission OR Enter City Name Manually.',
        })
        :
        setWeatherData({
          error: 'Unable To Retrieve Location. Please Try Again.',
        })

    }


    navigator.geolocation.getCurrentPosition(accept, reject);

  }


  useEffect(() => {

    if (cityName) {

      async function getCityWeather() {

        setLoading(true);

        try {

          const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

          const response = await fetch(URL);

          if (!response.ok) {

            if (response.status === 404) {
              throw new Error('City Not Found, Please Check The City Name.');
            }

            throw new Error('Sorry An Error Has Occured, Please Try Again Later.');
          }

          const data = await response.json();

          setWeatherData({
            city: data.name,
            country: data.sys.country,
            temperature: Math.trunc(data.main.temp),
            feelsLikeTemperature: Math.trunc(data.main.feels_like),
            humidity: data.main.humidity,
            description: data.weather[0].main,
            windSpeed: data.wind.speed,
            error: null,
          });

        } catch (err) {

          setWeatherData({
            error: err.message,
          });

        }

        setLoading(false);
      }

      getCityWeather();
    }
  }, [cityName]);



  return (
    <div className="flex flex-col items-center bg-slate-800 min-h-screen py-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">Weather App</h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter City Name"
          value={inputCityName}
          onChange={(e) => setInputCityName(e.target.value)}
          className="p-2 border-2 border-gray-300 rounded-l-lg text-gray-700"
        />

        <button
          type="button"
          onClick={() => setCityName(inputCityName)}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          <svg width="27px" height="27px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"> <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 27l-7.5-7.5" /> <circle r={9} stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} transform="matrix(-1 0 0 1 14 13)" /></svg>
        </button>
      </div>

      <button
        type="button"
        onClick={getLocationWeather}
        className="bg-green-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-green-600"
      >
        <svg width="39px" height="39px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4.06189C7.38128 4.51314 4.51314 7.38128 4.06189 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.06189C4.51314 16.6187 7.38128 19.4869 11 19.9381V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V19.9381C16.6187 19.4869 19.4869 16.6187 19.9381 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189V3ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" fill="#272727" /></svg>

      </button>

      {
          (loading)
          ? <div className="loader mt-6 text-3xl text-gray-200">Loading...</div>

          : (weatherData.error)
          ? <p className="text-red-600 mt-6">{weatherData.error}</p>

          : (weatherData.city) 
          ? (
              <div className="mt-6 p-8 bg-white shadow-md rounded-lg ">

                <p className="text-2xl font-semibold">City : {weatherData.city}</p>
                <p className="text-lg mt-2">Country :  {weatherData.country}</p>
                <p className="text-lg mt-2">Temperature : {weatherData.temperature} °C</p>
                <p className="text-lg mt-2">Feels Like : {weatherData.feelsLikeTemperature} °C</p>
                <p className="text-lg mt-2">Humidity : {weatherData.humidity}%</p>
                <p className="text-lg mt-2">Description : {weatherData.description}</p>
                <p className="text-lg mt-2">Wind Speed : {(weatherData.windSpeed * 3.6).toFixed(2)} km/h</p>

              </div>
            ) 

          : ''
      }

    </div>
  );
}

export default ReactApp;