import Tool from "./Tool";
import styles from './ToolsSection.module.css'

import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ToolsSection() {

   const [tools, setTools] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3001/tools')
         .then((res) => {
            setTools(res.data)
         })
         .catch((e) => console.log(e))
   }, [])

   return (
      <div className={styles.toolsSectionBanner}>
         <div className={styles.toolsSection}>
            <div className={styles.toolsSectionHeader}>
               <h2>Tools Section</h2>
               <Link to="/NewTool">
                  <p className="link-secondary" >Add a new tool</p> 
               </Link>
            </div>
            <ul className={styles.toolsList}>
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