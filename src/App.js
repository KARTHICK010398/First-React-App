import './App.css';
import MovieLists from './MovieLists.js';
import { Home } from './Home';
import { AddColor } from './AddColor.js';
// import { MyApp } from './MyApp.js';
import { Route, Routes,Navigate, useParams, useNavigate } from 'react-router-dom';
import { NotFound } from './NotFound.js';
import { useState } from 'react';
import { AddMovie } from './AddMovie';
// import {Login} from './Login.js';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


function App() {
  const  InitialMovieList = [

    {
    "id": "100",
    "name": "RRR",
    "poster":
    "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "id": "101",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    "id": "102",
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    "id": "103",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    "id": "104",
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    "id": "105",
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    "id": "106",
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
    "id": "107",
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
    ];

    const [mode, setMode] = useState("dark") 
    const Theme = createTheme({
      palette: {
        mode:mode?'dark':"light" 
      },
    });
  const [movieList , setMovieList] = useState(InitialMovieList);
  const navigate = useNavigate();
  
  fetch("https://62d13be1d4eb6c69e7d943c4.mockapi.io/movies")
     .then((data)=>data.json()).then((mvs)=> console.log(mvs));
  return (

    <ThemeProvider theme={Theme}>
    <Paper style={{borderRadius:"0px",minHeight:"100vh"}} elevation={4}>
    <div className="App">
         {/* <div>
         <ul style={{display: 'inline'}}>
          <li> <Link style= {{ textDecoration: 'none' }} to="/">Home</Link> </li>
          <li> <Link style={{ textDecoration: 'none' }} to="/addmovie">Add Movie</Link> </li>
          <li> <Link style={{ textDecoration: 'none' }} to="/movielist">MoviesList</Link> </li>
          <li> <Link style={{ textDecoration: 'none' }} to="/colorgame">Color Game</Link> </li>
          <li> <Link style={{ textDecoration: 'none' }} to="/myapp">My App</Link> </li>
          <li> <Link style={{ textDecoration: 'none' }} to="/login">Login</Link> </li>
         </ul>
         </div> */}
          
         <AppBar position="static" style={{ "margin-bottom":"20px"}}>
        <Toolbar>
          <Button onClick={()=>navigate("/")} color="inherit">Home</Button>
          <Button onClick={()=>navigate("/movielist")} color="inherit">MoviesList</Button>
          <Button onClick={()=>navigate("/addmovie")} color="inherit">Add Movie</Button>
          <Button onClick={()=>navigate("/colorgame")} color="inherit">Color Game</Button>
          <Button onClick={()=>{setMode(!mode)}} color="inherit"
           startIcon={
            mode==="dark" ?  <Brightness4Icon /> : <Brightness7Icon />
          }>
            {mode?"Light mode":"Dark mode"}
          </Button>
          {/* <Button onClick={()=>navigate("/myapp")} color="inherit">My App</Button> */}
        </Toolbar>
      </AppBar>

        <Routes>
        <Route path='*' element={<Navigate to="404"/>}/> 
        <Route path='404' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Navigate replace to="/films"/>}/>
        <Route path='/films' element={<Navigate replace to="/movielist"/>}/>
        <Route path='/movielist' element={<MovieLists movieList={movieList} setMovieList={setMovieList}/>}/>
        <Route path="/movielist/:id" element={<MovieDetails  movieList={movieList}/>}/>
        <Route path='/colorgame' element={<AddColor/>}/>
        {/* <Route path='/myapp' element={<MyApp/>}/> */}
        <Route path='/addmovie' element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
};



function MovieDetails({movieList}){
  const styles = {
    color:movieList.rating > 8 ? "green" :"red"
   }
  const {id} = useParams();
  console.log(movieList);
  const movie = movieList[id];
  console.log(movieList , movie)
  const navigate = useNavigate();
  return(
    <div className='movie-details-container'>
      <iframe width="100%"
       height="600"
       src={movie.trailer} 
       title="Baahubali Trailer Tamil || Prabhas, Rana Daggubati, Anushka, Tamannaah || Bahubali Trailer" 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen>
       </iframe>
     <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
      </div>
      <p className='movie-summary'>{movie.summary}</p>
      <button onClick={()=> navigate(-1)}> Back </button> 
    </div>
  )
}

export default App;


