import styles from './subjects.module.css';
import { useLocation, useParams } from 'react-router-dom';

function SubjectPage(props) {
   

   const location = useLocation()
   const { subject } = useParams()

   return (
      <div>
         <h1>Welcome to the {subject} page!</h1>
            <ul>
               <h2>LOCATION</h2>
                  <li>LOCATION PATHNAME : {location.pathname}</li>
                  <li>LOCATION SEARCH : {location.search}</li>
                  <li>LOCATION HASH : {location.hash}</li>
                  <li>LOCATION STATE : {location.state}</li>
                  <li>LOCATION KEY : {location.key}</li>
               <h2>PARAMS</h2>
                  <li>PARAMS : {subject} </li>
            </ul>
      </div>
   )
}

export default SubjectPage;