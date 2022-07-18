import{useState} from 'react';
import { ColorBox } from './ColorBox';
import Button from '@mui/material/Button';



export function AddColor(){
    // const color = ['orange','green','red','yello'];
    const NewColorList = ["deepskyblue","yellow","deeppink"]; 
    const [ColorList ,setColorList] = useState(NewColorList);
    const [color,setColor] = useState("green");
    const styles = {
      background:color,
      fontSize:"20px"
    }
    return(
      <div>
          <input type="text"
          style={styles}
          onChange={(event)=>setColor(event.target.value)}
          placeholder="Enter Color"
          value={color}
          />
          <Button style={{marginLeft:"20px"}} variant="contained" className='add-btn' onClick={()=>setColorList([...ColorList,color])}>
            Add Color
          </Button>
         {ColorList.map((cl)=>{
         return <ColorBox Color={cl}/>
  })}
      </div>
      
    );
  };
  