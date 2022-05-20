import { useState } from 'react';

function AddItemComponent(props) {
   
   const [clicked, setClicked] = useState(false);

   const handleClick = (e) => {
      e.preventDefault();
      setClicked((prevClicked) => !prevClicked)
   }

   //If user clicks add item display form
   if(clicked) {
      return (
         <div>
            <form>
               <input></input>
            </form>
            <button className="btn btn-danger" onClick={handleClick} >Cancel</button>
         </div>
      )
   }

   return (
      <div>
         <button className="btn btn-primary" onClick={handleClick} >Add new item</button>
      </div>
   )
}

export default AddItemComponent;