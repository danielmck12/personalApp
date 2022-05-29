import axios from 'axios';
import { useState } from 'react';
import './AddItemComponent.css';

function AddItemComponent(props) {
   
   const [clicked, setClicked] = useState(false);
   
   //Form state
   const [title, setTitle] = useState();
   const [subject, setSubject] = useState();
   const [comment, setComment] = useState();

   const handleClick = (e) => {
      e.preventDefault();
      setClicked((prevClicked) => !prevClicked)
   }

   const handleChange = ({ target }) => {
      target.name === "title" ? setTitle(target.value) :
         target.name === "subject" ? setSubject(target.value) :
            setComment(target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      props.setLoading()

      const newItem = {
         title:title,
         subject:subject,
         comment:comment
       }
      axios.post("http://localhost:3000/items", newItem)
      .then(response => console.log(response.data))
         .then(() => {
            setTitle('')
            setComment('')
            setSubject('')
         })
         .catch(err => console.log(err));
   }

   //If user clicks add item; display form
   if(clicked) {
      return (
         <div className='form-div'>          
               <legend>Add a new item</legend>
               <label htmlFor="title">
                  Title :<input onChange={handleChange} type="text" maxLength="30" name="title" id="title" value={title} required></input>
               </label>
               <label htmlFor="subject">
               Subject :<input onChange={handleChange} type="text" name="subject" id="subject" value={subject}></input>
               </label>
               <label htmlFor="comment">
               <textarea onChange={handleChange} name="comment" id="comment" value={comment}></textarea>
               </label>
               <input type="submit" onClick={handleSubmit} value="Add Item" className='btn btn-success btn-block w50 m25'></input>
            <button className="btn btn-danger w50 m25" onClick={handleClick} >Cancel</button>
         </div>
      )
   }

   return (
      <div className='newItemButtonHolder'>
         <button className="btn btn-primary" onClick={handleClick} >Add new item</button>
      </div>
   )
}

export default AddItemComponent;