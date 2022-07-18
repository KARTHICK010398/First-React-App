import{useState} from 'react';
// import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import CardActions from '@mui/material/CardActions';




export function Likebuttons(){
    const [like,setlike] = useState(0);
    const [dislike,setdislike] = useState(0);
    return(
      <div>
        <CardActions>
         <IconButton color="primary"
         aria-label="Like Movie"  onClick={()=>{setlike(like +1) 
         console.log(like)}}>
          <Badge badgeContent={like} color="primary">
         👍
         </Badge>
         </IconButton>

         <IconButton color="error"
         aria-label="DisLike Movie"  onClick={()=>{setdislike(dislike +1) 
         console.log(dislike)}}>
         <Badge badgeContent={dislike} color="error">
         👎
         </Badge>
         </IconButton>
         </CardActions>
      </div>
    )
  };