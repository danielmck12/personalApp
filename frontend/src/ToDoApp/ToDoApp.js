import styles from './ToDoApp.module.css';

import AddItemComponent from './components/AddItems/AddItemComponent'
import ItemList from './components/Lists/ItemList';

import { useState, useEffect } from 'react';

function ToDoApp(props) {

   document.title = 'COMA | ' + props.title;

   const [loading, setLoading] = useState(false);

   useEffect(() => {
      
      setLoading(false)
   }, [loading])

   /*if(loading) {
     return <LoadingScreen />
   }*/

   return (
      <div className={styles.outerApp}>
         <div className={styles.App}>
            <div className={`${styles.itemList} ${styles.unCompleted}`}>
               <ItemList progress={1} setLoading={setLoading} loading={loading} />
            </div>
            <div className={`${styles.itemList} ${styles.inProgress}`}>
               <ItemList progress={2} setLoading={setLoading} loading={loading} />
            </div>
            <div className={`${styles.itemList} ${styles.completed}`}>
               <ItemList progress={3} setLoading={setLoading} loading={loading} />
            </div>

         </div>
         <div className={styles.addItem}>
            <AddItemComponent setLoading={() => setLoading(true)} />
         </div>
      </div>


   );
}

export default ToDoApp;