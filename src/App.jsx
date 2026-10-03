import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/search'
import Moviecard from './components/moviecard';
const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDD_API_KEY;
const API_OPTIONS = {
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchmovie,setsearchmovie] = useState('');
  const [errormessage,seterrormessage] = useState(null)
  const [movies,setMovies] = useState([])
  const [loading, isLoading] = useState(false)
  const fetchmovies = async (query = '')=>{
    seterrormessage('');
    isLoading(true)
    try{
      const endpoint = query ? 
      `${API_BASE_URL}/search/multi?query=${query}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint,API_OPTIONS)
      if(!response.ok){
        throw new Error('failed to fetch')
      }
      const data = await response.json()
      if(data.response===false){
        seterrormessage('failed to fetch movies');
        setMovies([]);
        
      }
      setMovies(data.results)
    }catch(error){
      console.log(error)
      seterrormessage('failed to fetch movies try again later');
    }finally{
      isLoading(false);
    }
  }
  useEffect(()=>{
    fetchmovies(searchmovie)
  },[searchmovie])
  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'>
        <header>
          <img src='./hero.png' alt='hero-png'></img>
          <h1>
          Find<span className='text-gradient'>Movies</span> you will enjoy
            without the hassle
          </h1> 
          <Search search = {searchmovie} setsearchmovie = {setsearchmovie}/>
        </header>
       <section className='all-movies'>
        <h2 className='mt-[40px]'>ALL MOVIES</h2>
        {loading ?(
          <p className='text-white'>Loading...</p>
        ): errormessage ? (
          <p className='text-red-500'>{errormessage}</p>
        ):(
          <ul>
            {movies.map((movie)=>(
              <Moviecard key={movie.id} movie={movie}/>
            ))}
          </ul>
        )}
       </section>
      </div>
    </main>
  )
}

export default App
