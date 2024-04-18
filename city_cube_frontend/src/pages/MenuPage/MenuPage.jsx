import menuObjects from "@data/menuObjects.js";
import MenuItem from "@components/MenuItem/MenuItem";
import SectionBreak from "@components/SectionBreak/SectionBreak";
import "./MenuPage.css";
import { useEffect, useState } from "react";

const LoadTimeline = {
  LOADING: 1,
  FOUND: 2,
  ERROR: 3,
}
export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(null);
  const [timeline, setTimeline] = useState(LoadTimeline.LOADING);

  useEffect(() => {
    // const menuItems = await menuObjectsts;
    // add filter option for flavors, price, etc.
    // const menuQueryResults = menuObjects;
    fetch('http://localhost:3000/api/menu-items')
      .then(res => res.json())
      .then(json => { 
        console.log(json);
        setMenuItems(json.map((menuObject, index) => {
          return (<MenuItem key={index} {...menuObject}/>);
        }));
        setTimeline(LoadTimeline.FOUND)
      })
      .catch(err => {
        console.log(err);
        setTimeline(LoadTimeline.ERROR);
      });
  }, [])
  
  return (
    <main className="menu-page">
      <h1 className="page-header">Our Menu</h1>
      <SectionBreak />
      <section className="menu-section">
       { 
       timeline === LoadTimeline.LOADING && <p className='centered-text'>Loading menu...</p> 
        ||
        timeline === LoadTimeline.FOUND && menuItems
        ||
        timeline === LoadTimeline.ERROR && <p className='centered-text'>Can&apos;t get menu at the moment; please check again later!</p>
       }
      </section>
    </main>
  );
}
