import Tool from "./Tool";
import './ToolsSection.css'
import todoImage from '../../images/todoImage.jpg'

import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ToolsSection() {
   //request is sent to db to get a list of the tools
   //this list will be an array of objects with each object
   //having properties of those in the mock list below
   /*
   const mockListOfTools = [
      {
         name:"toDoApp",
         description:"A tool for organising todo items and tracking the progress made on each item",
         image:todoImage,
         id:1
      },
      {
         name:"polynomial calculator",
         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nesciunt excepturi aut vero adipisci, o",
         image:todoImage,
         id:2
      },
      {
         name:"future tool",
         description:"bcaecati possimus nemo eos ad, sequi, rem at iusto commodi culpa minima nobis in est nihil.",
         image:todoImage,
         id:3
      }
   ]
   */
   const [tools, setTools] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3001/tools')
         .then((res) => {
            setTools(res.data)
         })
         .catch((e) => console.log(e))
   }, [])

   return (
      <div className="tools-section-banner">
         <div className="tools-section">
            <div className="tools-section-header">
               <h2>Tools Section</h2>
               <Link to="/NewTool">
                  <p className="link-secondary" >Add a new tool</p> 
               </Link>
            </div>
            <ul className="tools-list">
               {
                  tools.map((e) => {
                     return <Tool item={e} key={e._id}></Tool>
                  })
               }
            </ul>
         </div>
         
      </div>
   )
}

export default ToolsSection;