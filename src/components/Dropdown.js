import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""; // determina la clase CSS
  
  return ( 
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}> 
    {submenus.map((submenu, index) => (
     // se crea el componente MenuItems recorriendo los submenus
     <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
    ))}
   </ul>

  );
};
 
 export default Dropdown;