import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false); // estados del menu desplegables
  let ref = useRef(); // permite el uso de los event listeners

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) { // verifica si el sub menu esta abierto
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
      {items.submenu ? ( // verifica si hay un submenu
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
        <a href="/">{items.title}</a> // sino renderiza un link
      )}
    </li>
  );
};

export default MenuItems;