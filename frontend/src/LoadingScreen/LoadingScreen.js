import styles from './LoadingScreen.module.css';

function LoadingScreen() {
   return (
      <div className={styles.loadingScreen}>
         <h1>Loading...</h1>
         <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
      </div>
   )
}

export default LoadingScreen