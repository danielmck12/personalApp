import {  Link } from 'react-router-dom';
import styles from './SubjectCard.module.css';
import { formatForTitle } from '../../helperFunctions/FormatSubjectName.js';

function SubjectCard(props) {

   let overview = props.subject.overview

   //if(props.subject.overview.length > 560) {
      //overview = props.subject.overview.slice(0,560) + '...'
   //}

   return (
      
      <li className={styles.subjectCardListItem}>
         <div className={styles.imageCard}>
            <img src={`/images/subjects/${props.subject.subjectName.toLowerCase()}Image.jpg`} alt={`${props.subject.subjectName} `} />
         </div>
         <div className={styles.infoCard}>
            <h2>{formatForTitle(props.subject.subjectName)}</h2>
            <p dangerouslySetInnerHTML={{__html : overview}} className={styles.truncateOverview}></p>
            <Link to={`${props.subject.subjectName}/overview`} className='btn btn-primary w-100 ' >Visit</Link>
         </div>
      </li>
   )
}

export default SubjectCard;