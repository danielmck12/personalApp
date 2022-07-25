import styles from './SubjectsApp.module.css';
import SubjectCard from './components/SubjectCard/SubjectCard.js';

//import { Outlet } from 'react-router-dom' 



function SubjectsApp() {

   let subjects = [
      {
         name:"Maths",
         desc: "this is the maths desc",
         infoIncludes: ["videos", "websites", "past papers"],
         id:1
      },
      {
         name: "Physics",
         desc: "this is the physics desc",
         infoIncludes: ["videos", "websites", "past papers"],
         id: 2
      },
      {
         name: "Chemistry",
         desc: "This is the chemistry desc",
         infoIncludes: ["videos", "websites", "past papers"],
         id: 3
      }
   ]

   return (
      <div className={styles.subjectApp}>
         <div className={styles.header}>
            <h1>Welcome to the subjects page</h1>
            <p>
               Across this page links to selected subjects can be found. Each link leads to further information on the subject. Information includes relvant articles, books, videos, websites, any of my own work on the given subject, and more!
            </p>
         </div>
         
         <ul className={styles.subjectsList}>
            {subjects.map((subject) => {
               return <SubjectCard key={subject.id} subject={subject} />
            })}
         </ul>

      </div>
   )
}

export default SubjectsApp;