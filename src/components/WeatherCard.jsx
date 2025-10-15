import React from 'react'

const  WeatherCard = ({weather}) => {
  return (
    <div>
    <h1 className='text-2xl font-semibold text-center'>   {weather.name} , {weather.sys.country}   </h1>
    <div className='flex justify-center items-center mt-4'>
      <img    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      
      alt={weather.weather[0].description}
      
      className='w-16, h-16'/>

      <p className='text-4xl font-bold'>
        {Math.round(weather.main.temp)}°C</p>
   
    </div>
      <p className='text-center
       text-gray-400 capitalize'> {weather.weather[0].description}</p>
    <div className='grid grid-cols-2 gap- mt-6'>
      <div className='text-center'>
<p className='text-gray-400'>Humidity</p>
<p className='font-bold'>{weather.main.humidity}%</p>

      </div>

<div  className='text-center' >
<p className= 'text-gray-400' >  Feels Like</p>
<p className='font-bold'>{Math.round(weather.main.feels_like)}°C</p>

      </div>

    </div>
    
    
    </div>
  )
}

export default WeatherCard