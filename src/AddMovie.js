import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './MovieLists.css';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setsummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div>
      <div className='add-movie-form'>
        <TextField id="outlined-basic" label="MOVIE NAME" variant="outlined" type="text" placeholder='MOVIE NAME'
          onChange={(event) => setName(event.target.value)} />

        <TextField id="outlined-basic" label="POSTER" variant="outlined" type="text" placeholder='POSTER'
          onChange={(event) => setPoster(event.target.value)} />

        <TextField id="outlined-basic" label="RATING" variant="outlined" type="text" placeholder='RATING'
          onChange={(event) => setRating(event.target.value)} />

        <TextField id="outlined-basic" label="SUMMARY" variant="outlined" type="text" placeholder='SUMMARY'
          onChange={(event) => setsummary(event.target.value)} />

        <TextField id="outlined-basic" label="TRAILER" variant="outlined" type="text" placeholder='TRAILER'
          onChange={(event) => setTrailer(event.target.value)} />

        <Button variant="contained" className='add-btn'
          onClick={() => {
            const NewMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer
            };
            console.log(NewMovie);
            setMovieList([...movieList, NewMovie]);
          }}>Add Movies</Button>


      </div>
    </div>
  );
}
