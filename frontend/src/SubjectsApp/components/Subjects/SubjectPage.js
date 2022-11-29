import styles from './SubjectPage.module.css';
import { /*useLocation,*/ useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SubjectInfoPanel from './SubjectInfo/SubjectInfoPanel';
import LoadingScreen from '../../../LoadingScreen/LoadingScreen';
import { formatForTitle } from '../../helperFunctions/FormatSubjectName';
import axios from 'axios';

function SubjectPage() {

   //const location = useLocation()
   const { subject } = useParams()

   const [subjectObj, setSubjectObj] = useState([]);

   const [loading, setLoading] = useState(true);

   useEffect(() => {

      setTimeout(() => setLoading(false), 500);

      const getSubjectByName =  async () => {
         await axios.get(`http://localhost:3001/subjects/${subject}`)
            .then(({ data }) => {
               setSubjectObj(data);
            })
      }
      
      getSubjectByName()

      axios.get(`http://localhost:3001/subjects/${subject}`)
         .then(({ data }) => {
            setSubjectObj(data);
            
         })
   }, [subject])
  
   if(loading) {
      return (
         <div className={styles.subjectPage}>
            <hr></hr>
            <LoadingScreen />
         </div>
      )
   }

   return (
      <div className={styles.subjectPage}>
         <h1>Welcome to the {formatForTitle(subjectObj.subjectName)} Page!</h1>
         <hr></hr>
         <SubjectInfoPanel subject={subjectObj} />
      </div>
   )
}

export default SubjectPage;