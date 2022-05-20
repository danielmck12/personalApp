import './ItemComponent.css'

function ItemComponent(props) {
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
               <button className='btn btn-primary'>Edit item</button>
               <button className='btn btn-outline-success'>Move to completed</button>
               <button className='btn btn-danger'>Delete item</button>
            </div>
         </li>
      
   )
}

export default ItemComponent;