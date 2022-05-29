import axios from 'axios';
import './ItemComponent.css'

function ItemComponent(props) {
   const handleClick = ({ target }) => {
      if(target.id === "delete") {
         props.setLoading()
         console.log(props.item._id)
         axios.delete(`http://localhost:3000/items/${props.item._id}`)
      }
   }

   return (
         <li className="listItem">
            <div className='width100'>
               <div className="details">
                  <h2>{props.item.title}</h2>
                  <h3>{props.item.subject}</h3>
                  <p>{props.item.comment}</p>
               </div>
            </div>
            <div className='itemButtons'>
               {props.progress === 3 ? "" : <button className='btn btn-warning' id="edit">Edit item</button>}
            {props.progress === 1 ? <button className='btn btn-outline-success' id="move">Move to in progress</button> : props.progress === 2 ? <button className='btn btn-outline-success' id="move">Move to completed</button> : "" }
               <button className='btn btn-danger' onClick={handleClick} id="delete">Delete item</button>
            </div>
         </li>
      
   )
}

export default ItemComponent;