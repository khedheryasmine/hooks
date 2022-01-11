import { useState} from 'react';
import  './App.css';
import MovieCard from './components/MovieCard';
import { v4 as uuidv4 } from 'uuid';
import data from './components/Data'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const[movies,setMovies] = useState(data.cardData)
  const [movie, setMovie] = useState({
    title: '',
    img: '',
    Description:'',
    rate:''
  });
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
    
  }
  const handleSubmit = (e) =>{
    console.log(movie)
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    console.log(movies)
    setMovie('')
      };
     
    return (
      <div>
        <MovieCard movies={movies}/>
      </div>
    )
  }


export default App 
