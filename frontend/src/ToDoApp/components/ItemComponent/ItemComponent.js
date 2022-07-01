import axios from 'axios';
import { marked } from 'marked';
import { useState } from 'react';

import { moveStage } from '../../helperFunctions/moveStage.js';
import './ItemComponent.css'

function ItemComponent(props) {
   const [isEditing, setIsEditing] = useState(false)

   const [title, setTitle] = useState(props.item.title);
   const [subject, setSubject] = useState(props.item.subject);
   const [comment, setComment] = useState(props.item.comment);

   let markedComment
   //This condition ensures marked does not
   //attempt to parse undefined
   if(props.item.comment) {
      markedComment = marked.parse(props.item.comment, { gfm: true })
   } else {
      markedComment = props.item.comment;
   }
   
   //let markedComment = props.item.comment;

   const handleClick = ({ target }) => {
      //Handle item is deleted
      if(target.id === "delete") {
         props.setLoading()
         axios.delete(`http://localhost:3001/items/${props.item._id}`)
      //Handle item is edited
      } else if(target.id === "edit") {
         props.setLoading()
         //Set is editing to render/un-render inputs
         setIsEditing(prevState => !prevState);
         if(isEditing) {
            axios.put(`http://localhost:3001/items/${props.item._id}`, {title:title, subject:subject, comment:comment})
         }
      //Handle cancel edit
      } else if(target.id === "cancel") {
         //Un-render inputs
         //Tidy up state
         setIsEditing(false);
         setTitle(props.item.title)
         setSubject(props.item.subject)
         setComment(props.item.comment)
      }
   }

   const handleMove = ({ target }) => {
      let currentStage = target.id === "moveStage1" ? 1 : 2;
      props.setLoading()
      moveStage(props.item._id, currentStage)
   }

   const handleChange = ({ target }) => {
      target.name === "title" ? setTitle(target.value) :
         target.name === "subject" ? setSubject(target.value) :
            setComment(target.value);
   }

   if(isEditing) {
      return (
         <div className="isEditing">
            <li className="listItem">
               <div className='width100'>
                  <div className="details">
                     <h2>{title}</h2>
                     <h3>{subject}</h3>
                     <p>{comment}</p>
                     <hr></hr>
                     <label htmlFor='title'>
                        <input onChange={handleChange} type="text" name="title" id="titleInput" value={title}></input>
                     </label>
                     <label htmlFor='subject'>
                        <input onChange={handleChange} type="text" name="subject" id="subjectInput" value={subject}></input>
                     </label>
                     <label htmlFor="comment">
                        <textarea onChange={handleChange} name="comment" id="commentInput" value={comment}></textarea>
                     </label>
                  </div>
               </div>
               <div className='itemButtons'>
                  <button className='btn btn-warning' onClick={handleClick} id="edit">Update!</button>
                  <button className='btn btn-danger' onClick={handleClick} id="cancel">Cancel</button>
               </div>
            </li>
         </div>
      )
   }

   return (
         <li className="listItem">
            <div className='width100'>
               <div className="details">
                  <h2>{props.item.title}</h2>
                  <h3><em>{props.item.subject}</em></h3>
                  <p dangerouslySetInnerHTML={{__html:markedComment}} id="comment"></p>
               </div>
            </div>
            <div className='itemButtons'>
               {props.progress === 3 ? "" : <button className='btn btn-warning' onClick={handleClick} id="edit">Edit item</button>}
            {props.progress === 1 ? <button className='btn btn-outline-success' onClick={handleMove} id="moveStage1">Move to in progress</button> : props.progress === 2 ? <button className='btn btn-outline-success' onClick={handleMove} id="moveStage2">Move to completed</button> : "" }
               <button className='btn btn-danger' onClick={handleClick} id="delete">Delete item</button>
            </div>
         </li>
      
   )
}

export default ItemComponent;