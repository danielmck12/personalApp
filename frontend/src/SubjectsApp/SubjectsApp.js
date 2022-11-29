import styles from './SubjectsApp.module.css';
import SubjectCard from './components/SubjectCard/SubjectCard.js';
import LoadingScreen from '../LoadingScreen/LoadingScreen.js';
import { formatForPath } from './helperFunctions/FormatSubjectName';
import axios from 'axios';
import { useEffect, useState } from 'react'; 

function SubjectsApp() {
   /*let subjects = [
     {
        name:"Maths",
        desc: "this is the maths desc",
        infoIncludes: ["videos", "websites", "past papers"],
        _id:1
     },
     {
        name: "Physics",
        desc: "this is the physics desc",
        infoIncludes: ["videos", "websites", "past papers"],
        _id: 2
     },
     {
        name: "Chemistry",
        desc: "This is the chemistry desc",
        infoIncludes: ["videos", "websites", "past papers"],
        _id: 3
     }
  ]*/

   const [loading, setLoading ] = useState(true);
   const [subjects, setSubjects] = useState([])

   const [subjectName, setSubjectName] = useState('');
   const [overview, setOverview] = useState('');


   //Fetch the list of subjects
   //Then set subjects state
   useEffect(() => {
      setTimeout(() => setLoading(false), 750);

      axios.get('http://localhost:3001/subjects')
         .then((res) => {
            setSubjects(res.data)
         })
         .catch((e) => console.log(e))

   }, [loading]) 

   //Form state managment
   const handleChange = ({ target }) => {
      target.name === "subjectName" ? setSubjectName(target.value) : setOverview(target.value);
   }

   //When a new subject is submited
   const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      
      
      const newSubject = {
         subjectName: formatForPath(subjectName),
         overview : overview
      }

      axios.post('http://localhost:3001/subjects', newSubject)
         .then((res) => {
            console.log(res.data)
         })
         .then(() => {
            setSubjectName('');
            setOverview('');
         })
         .catch((e) => console.log(e))
         
   }

   if(loading) {
      return (
         <div className={styles.subjectApp}>
            <div className={styles.header}>
               <h1>Welcome to the Subjects Page!</h1>
               <p>
                  Across this page links to selected subjects can be found. Each link leads to further information on the subject. Information includes relvant articles, books, videos, websites, any of my own work on the given subject, and more!
               </p>
            </div>
            <LoadingScreen />
         </div>
      )
   }
   
   return (
      <div className={styles.subjectApp}>
         <div className={styles.header}>
            <h1>Welcome to the Subjects Page!</h1>
            <p>
               Across this page links to selected subjects can be found. Each link leads to further information on the subject. Information includes relvant articles, books, videos, websites, any of my own work on the given subject, and more!
            </p>
         </div>
         
         <ul className={styles.subjectsList}>
            {subjects.map((subject) => {
               return <SubjectCard key={subject._id} subject={subject} />
            })}
         </ul>
         <div className={`card ${styles.addSubjectCard}`}>
            <legend><h3>Add a new subject</h3></legend>
            <label htmlFor="subjectName">
               Subject Name :<input onChange={handleChange} type="text" name="subjectName" id="subjectName" value={subjectName} required></input>
            </label>
            <label htmlFor="overview">
               Overview :<textarea onChange={handleChange} type="text" name="overview" id="overview" value={overview}></textarea>
            </label>
            <button className='btn btn-success btn-block' onClick={handleSubmit} value="Add Item">Add Item</button>

         </div>
      </div>
   )
}

export default SubjectsApp;