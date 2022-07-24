import styles from './NewTool.module.css';
import { useState } from 'react';
import axios from 'axios';
//import multer from 'multer';
import { Link, useNavigate } from 'react-router-dom';

function NewTool(props) {

   document.title = 'COMA | ' + props.title;
   
   const [name, setName] = useState();
   const [description, setDescription] = useState();

   const navigate = useNavigate();

   const handleClick = (e) => {
      e.preventDefault()

      if(e.target.id === 'newToolSubmit'){

         const newTool = {
            "name":name,
            "description":description
         }

         axios.post("http://localhost:3001/tools", newTool)
            .then(response => console.log(response.data))
            .then(() => {
               setName('')
               setDescription('')
            })
            .catch(err => console.log(err))
            .then(() => navigate('/'));
      }
   }

   const handleChange = ({ target }) => {
      target.name === 'name' ? setName(target.value) : setDescription(target.value)
   }

   return (
      <div className={styles.newTool}>
         <form className={styles.newToolForm}>
            <legend>Add a New Tool</legend>
            <label htmlFor='name' className={styles.newToolLabel}>
               Tool Name :<input onChange={handleChange} type="text" id="name" name="name" value={name}></input>
            </label>
            <label htmlFor='description' className={styles.newToolLabel}>
               Description :<textarea onChange={handleChange} type="text" id="description" name="description" value={description}></textarea>
            </label>
            <button onClick={handleClick} id='newToolSubmit' className={`btn btn-success btn-block ${styles.newToolButton}`} >Add Item</button>
            <Link id='newToolBack' className={`btn btn-danger ${styles.newToolButton}`} to='/'>Back</Link>
         </form>
      </div>
   )
}

export default NewTool;

