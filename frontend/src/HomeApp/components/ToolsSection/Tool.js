import './Tool.css';
import todoImage from '../../images/todoImage.jpg'
function Tool(props) {
   return (
      <li className='tool-item'>
         <img src={todoImage} alt={`${props.item.name}`} />
         <div className='tool-details'>
            <h5>{props.item.name}</h5>
            <p>{props.item.description}</p>
         </div>
      </li>
   )
}

export default Tool