import { NavLink, Outlet} from 'react-router-dom';
import styles from './SubjectInfoPanel.module.css';

function SubjectInfoPanel(props) {

   return (
      <div className={`${styles.infoPanel}`}> 
         <div className={`btn-group ${styles.subjectLinks}`} role='group' aria-label='Series of tabs, each for a different section' >
            <NavLink to={`/subjects/${props.subject.subjectName}/overview`} className={`btn btn-outline-dark ${styles.tabButton} ${({ isActive }) => isActive && 'active' }`}>Overview</NavLink>
            <NavLink to={`/subjects/${props.subject.subjectName}/books`} className={`btn btn-outline-dark ${styles.tabButton} ${({ isActive }) => isActive && 'active' }`}>Books</NavLink>
            <NavLink to={`/subjects/${props.subject.subjectName}/videos`} className={`btn btn-outline-dark ${styles.tabButton} ${({ isActive }) => isActive && 'active' }`}>Videos</NavLink>
            <NavLink to={`/subjects/${props.subject.subjectName}/personalWork`} className={`btn btn-outline-dark ${styles.tabButton} ${({ isActive }) => isActive && 'active' }`}>Personal Work</NavLink>
            <NavLink to={`/subjects/${props.subject.subjectName}/additionalResources`} className={`btn btn-outline-dark ${styles.tabButton} ${({ isActive }) => isActive && 'active' }`}>Additional Resources</NavLink>
         </div>
         <Outlet context={props.subject}/>
      </div>
   )
}

export default SubjectInfoPanel;