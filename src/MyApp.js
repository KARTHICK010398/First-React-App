import { Message } from "./Message"



export function MyApp(){
    const Users = [
      {name:'Karthick',
      picture : "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
      },
      {name:'Kaviya',
      picture : "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      },
      {name:'Sekar',
      picture:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
      },
      {name:'Sennammal',
      picture:"https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
      }
    ]
  
    return(
    <div>
           {Users.map((usr)=>(
        <Message name={usr.name}
         picture={usr.picture}/>
         ))};
    </div>)
  }
  