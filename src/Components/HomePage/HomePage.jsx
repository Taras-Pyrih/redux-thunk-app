import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Sidebar/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};