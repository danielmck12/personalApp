import axios from "axios";
import ItemComponent from "../../ItemComponent/ItemComponent";
import { useState, useEffect } from 'react';

function CompletedItems(props) {
   /*const listItems = [
      {
         title: 'item1',
         id: 1,
         subject: 'maths',
         comment: 'Hello this is a generic comment about this item',
         completed: false
      },
      {
         title: 'item2',
         id: 2,
         subject: 'chemistry',
         comment: 'Hello this is a generic comment about this item',
         completed: false
      },
      {
         title: 'item3',
         id: 3,
         subject: 'physics',
         comment: 'Hello this is a generic comment about this item',
         completed: false
      },
      {
         title: 'item4',
         id: 4,
         subject: 'art and design',
         comment: 'Hello this is a generic comment about this item',
         completed: false
      },
      {
         title: 'item5',
         id: 5,
         subject: 'CDT',
         comment: 'Hello this is a generic comment about this item',
         completed: false
      }
   ]*/

   const [completedItems, setCompletedItems] = useState([])

   const getItems = async () => {
      try {
         let { data } = await axios.get("http://localhost:3000/items")

         console.log(data.filter((e) => e.completed === true))
         setCompletedItems(data.filter((e) => e.completed === true))
      } catch(e) {
         console.log(e);
      }
     

   }
   
   useEffect(() => {
      getItems();
   }, [props.loading])

   /*const filterItems = () => {
      getItems()
      console.log("data here: " + data)
      const filteredItems = data.filter(e => e.completed === true)
      return filteredItems;
   }*/

   //const items = filterItems()
   if(completedItems.length < 1) {
      return (
         <h1>No tasks have been completed recently!</h1>
      )
   }

   return (
      <div>
         {console.log("Filtered items: " + completedItems)}
         <h2><strong>Completed Tasks</strong></h2>
         <ul>
            {completedItems.map((e) => {
               return <ItemComponent setLoading={() => props.setLoading(true)} progress={3} key={e._id} item={e} />
            })}
         </ul>
      </div>
   )
}

export default CompletedItems;