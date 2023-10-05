import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {  // recorro menuItems
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>; // crea componente MenuItems 
        })}
      </ul>
    </nav>
  );
};

export default Navbar;