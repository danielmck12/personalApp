import SiteHero from "./components/siteHero/SiteHero";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import './HomeApp.css';

function HomeApp() {
   return (
      <div className="home-app">
         <div className="full-site-hero">
            <div className="welcoming-div">
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