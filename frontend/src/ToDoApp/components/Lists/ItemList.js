import ItemComponent from "../ItemComponent/ItemComponent.js"
import { getItems } from "../../helperFunctions/filterData.js";
import { useState, useEffect } from 'react';

function ItemList(props) {
   const [items, setItems] = useState([])

   useEffect(() => {
      getItems(props.progress, setItems);
   }, [props.loading, props.progress])

   let emptyListMessage = props.progress === 1 ? "No un completed tasks!" : props.progress === 2 ? "No tasks currently in progress!" : "No tasks have been completed recently!";
   let heading = props.progress === 1 ? "Un Completed Tasks" : props.progress === 2 ? "In Progress Tasks" : "Completed Tasks"

   if (items.length < 1) {
      return (
         <div>
         <h2><strong>{heading}</strong></h2>
         <h1>{emptyListMessage}</h1>
      </div>
         
      )
   }

   return (
      <div>
         <h2><strong>{heading}</strong></h2>
         <ul>
            {
               items.map((e) => {
                  return <ItemComponent progress={props.progress} setLoading={() => props.setLoading(true)} key={e._id} item={e} />
               })
            }
         </ul>
      </div>
   )
}

export default ItemList;