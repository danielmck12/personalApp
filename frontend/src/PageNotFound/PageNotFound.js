function PageNotFound(props) {
   document.title = 'COMA | ' + props.title;

   return(
      <div>
         <h1>The page you were looking for cannot be found :( </h1>
      </div>
   )
}

export default PageNotFound