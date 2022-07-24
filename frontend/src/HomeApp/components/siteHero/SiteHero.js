import styles from './SiteHero.module.css';

function SiteHero() {
   return (
      <div className={styles.siteHero}>
         <h1>This is the site hero</h1>
         <p>Date here</p>
         <p>Current weather here</p>
      </div>
   )
}

export default SiteHero;