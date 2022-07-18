// import React from "react";
import { useState } from 'react';
import './MovieLists.css';
import {Likebuttons} from './Likebuttons';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AlarmIcon from '@mui/icons-material/Alarm';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




// import { AddMovie } from './AddMovie';


export default function MovieLists({movieList ,setMovieList}){
   
    return(
    <div className="movie-list-container">
    {movieList.map((mv , index)=>(
      <Movie movieList={mv} key={index} id={index}/>
    ))}
    </div>);
    
  };
  
// ------------------------------------------- Movie Component --------------------------------------------- //

 function Movie({movieList,id}){
    const [show , setShow] = useState(true);
    const navigate  = useNavigate();
     // const Parastyles = {
    //     display : show === true ? "none" : "block"
    // };

    const styles = {
    color:movieList.rating > 8 ? "green" :"red"
   }
    return(
    <Card className='movie-container'>
      <Typography>
      <CardContent>
        <Card>
      <img src={movieList.poster} alt={movieList.name} className='movie-poster'/>
      </Card>
      <div className='movie-specs'>
        <h2 className='movie-name'>{movieList.name}
        
        <IconButton color="primary"
       aria-label="Toggal summary"
       /* style={{position:"relative",right:"70px"}} */ onClick={()=>{setShow(!show)}}
       >
        { show ? <ExpandLessIcon/>:<ExpandMoreIcon/>}
       </IconButton>
      
      <IconButton color="primary"
       aria-label="Go to movie details"
       /* style={{position:"relative",right:"70px"}} */ onClick={()=>navigate(`/movielist/${id}`)}
       >
      <InfoIcon/> 
      </IconButton>
        </h2>
        <p style={styles} className='movie-rating'>⭐ {movieList.rating}</p>
      </div>
      {/* <button >Toggle summary</button> */}
      
       {/* <p style={Parastyles} className='movie-summary'>{movieList.summary}</p> */}

    {/* CONDITIONAL RENDRING */}
    {show ? <p className='movie-summary'>{movieList.summary}</p> : null} 

    <Likebuttons/>
    </CardContent>
    </Typography>
    </Card >)
  };



