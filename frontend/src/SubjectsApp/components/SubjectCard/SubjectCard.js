import {  Link } from 'react-router-dom';
import styles from './SubjectCard.module.css';

function SubjectCard(props) {



   return (
      
      <li className={styles.subjectCardListItem}>
         <div className={styles.imageCard}>
            <img src={`images/subjects/${props.subject.name.toLowerCase()}Image.jpg`} alt={`${props.subject.name} `} />
         </div>
         <div className={styles.infoCard}>
            <h2>{props.subject.name}</h2>
            <p>{props.subject.desc}</p>
            <em>Included info: {props.subject.infoIncludes.map((e) => (e + " "))}</em>
            <Link to={`${props.subject.name.toLowerCase()}`} className='btn btn-primary w-100 mt-4' >Visit</Link>
         </div>
      </li>
   )
}

export default SubjectCard;