import { Link } from 'react-router-dom'

function PageNotFound(props) {
   document.title = 'COMA | ' + props.title;

   let style = {
      margin: ' 100px auto',
      textAlign: 'center'
   }

   return(
      <div style={style}>
         <h1>The page you were looking for cannot be found :( </h1>
         <h2><Link to='/'>Go Home?</Link></h2>
      </div>
   )
}

export default PageNotFound