import { useEffect, useState } from "react";
import '../App.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ItemComponent from '../ItemComponent/ItemComponent';
import axios from 'axios';

function GetItems() {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(false);
   
   //Fetch items from database
   useEffect(() => {
      setLoading(true);
      
      axios.get('http://localhost:3001/items')
         .then((data) => {
            setItems(data.data)
            console.log(...items);
         })
         .catch((e) => console.log(e))
         .then(() => setLoading(false))

      /*fetch('http://localhost:3000/items')
         .then((res) => res.json())
         .then((data) => setItems(data))
         .finally(() => setLoading(false))*/
   }, [setLoading])

   if (loading) {
      return <LoadingScreen />
   }

   return (
      <div className='itemList'>
         <ul>
            {
               items.map((e) => {
                  return <ItemComponent key={e._id} item={e} />
               })
            }
         </ul>
      </div>
   )
}

export default GetItems;