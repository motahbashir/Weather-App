import { useState } from 'react'
import Quotes from './components/Quotes'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import axios from "axios";
import video from "./assets/video.mp4";


function App() {
  const [count, setCount] = useState(0)
    const[weather, setWeather] = useState(null);
    const [loading, setLoading]= useState(false);
    const[error,setError]=useState("")



  const API_KEY = import.meta.env.VITE_API_KEY
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`

const fetchWeather = async (city) => {
  setLoading(true);
  setError("");
  try{
   const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await axios.get(url)
    console.log(response.data)
    setWeather(response.data)
  } catch(err){
  if (err.response && 
    err.response.status===404){
    setError("city not found please try again.");

} else {
  setError("an error hapende please try again");
}
setWeather(null);

} finally{
  setLoading(false)
}

;}



  return (
 <div className="min-h-screen 
 flex flex-col items-center
  justify-center bg-blue-100  relative overflow-hidden ">

    <video 
    className='absolute top-0 left-0 w-full h-full object-cover'
    autoPlay loop muted> 
      <source src={video} type='video/mp4'/></video>

<div className="bg-black/70 text-white rounded-lg shadow-lg 
p-8 max-w-md w-full z-10">
<h1 className='text-3xl font-bold text-center mb-6'>weather app</h1>
<SearchBar fetchWeather={fetchWeather}/>
{loading && <p className='text-center mt-4'>Loading....</p>}
{error && <p className='text-red-500 text-center mt-4'>{error}</p>}

<div className='mt-6'>
{weather && <WeatherCard weather= {weather}/>}

</div>

</div>


    </div>
     
    
  )
}

export default App