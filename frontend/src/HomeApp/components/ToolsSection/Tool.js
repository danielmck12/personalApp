import styles from './Tool.module.css';
import todoImage from '../../images/todoImage.jpg'
function Tool(props) {
   return (
      <li className={styles.toolItem}>
         <img src={todoImage} alt={`${props.item.name}`} />
         <div className={styles.toolDetails}>
            <h5>{props.item.name}</h5>
            <p>{props.item.description}</p>
         </div>
      </li>
   )
}

export default Tool