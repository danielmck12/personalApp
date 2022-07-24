import SiteHero from "./components/siteHero/SiteHero";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import styles from './HomeApp.module.css';


function HomeApp(props) {
   document.title = 'COMA | ' + props.title;

   return (
      <div className={styles.homeApp}>
         <div className={styles.fullSiteHero}>
            <div className={styles.welcomingDiv}>
               <h1>PLaceholder Name</h1>
               <h2>Welcome to the Home Page</h2>
            </div>
            <SiteHero></SiteHero>
         </div>
         <ToolsSection ></ToolsSection>
      </div>
   )
}

export default HomeApp;