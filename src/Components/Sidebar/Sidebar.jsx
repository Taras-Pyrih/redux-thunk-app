import { NavLink } from "react-router-dom";
import './Sidebar.scss';

export const Sidebar = () => {
  const setLinkStyle = ({ isActive }) => isActive ? 'active-link' : 'link';

  return (
    <div className="Sidebar">
      <nav>
        <NavLink className={setLinkStyle} to='/counter'>Counter</NavLink>
        <NavLink className={setLinkStyle} to='/userList'>UserList</NavLink>
      </nav>
    </div>
  );
};