import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Limpia el event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" 
            aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
            {items.title}{' '}          
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;