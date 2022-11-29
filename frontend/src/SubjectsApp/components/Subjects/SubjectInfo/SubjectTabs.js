import { useOutletContext } from 'react-router-dom';
import { formatForTitle } from '../../../helperFunctions/FormatSubjectName';
import styles from './SubjectTabs.module.css';

let subject;

function OverviewTab() {

   subject = useOutletContext();

   return (
      <div className={styles.fullTab}>
         <h1>An Overview of {formatForTitle(subject.subjectName)}</h1>
         <div className={`${styles.overviewSection}`}>
            <img src={`/images/subjects/${subject.subjectName}Image.jpg`} alt={subject.subjectName} />
            <p dangerouslySetInnerHTML={{__html : subject.overview}}></p>
         </div>
         
      </div>
   )   
}

function BookListItem(props) {
   const { book } = props
   return (
      <li>
         Title : {book.bookName}
      </li>
   )
}

function BooksTab(props) {

   subject = useOutletContext();
   console.log(subject.books)

   return (
      <div className={styles.fullTab}>
         <ul>
            {subject.books.map((book) => {
               return <BookListItem key={book._id} book={book} />
            })}
         </ul>
      </div>
   )
}


function VideoTab() {

   subject = useOutletContext();

   return (
      <div className={styles.fullTab}>
         <h1>videoTab</h1>
      </div>
   )
}

function PersonalWorkTab() {

   subject = useOutletContext();

   return (
      <div className={styles.fullTab}>
         <h1>personalWorkTab</h1>
      </div>
   )
}

function AdditionalResourcesTab() {

   subject = useOutletContext();

   return (
      <div className={styles.fullTab}>
         <h1>additionalResourcesTab</h1>
      </div>
   )
}


export {OverviewTab, BooksTab, VideoTab, PersonalWorkTab, AdditionalResourcesTab}
