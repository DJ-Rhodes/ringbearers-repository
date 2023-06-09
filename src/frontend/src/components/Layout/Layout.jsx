import moment from "moment/moment";
import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const { pathname } = useLocation()


  return (
    <div className={css.container}>
      <Sidebar />


      {/* making the dashboard as the default route */}
      {pathname === "/" && <Navigate to="/dashboard/:movieName" />}


      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>

          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={css.titleContainer}>
            <p className={css.title}>Ringbearer's Repository</p>
          </div>

          <div className={css.profile}>
            <img src="../../public/profile.png" alt="person image" />
            <div className={css.details}>
              <span>Damian Rhodes</span>
              <a href="https://www.github.com/DJ-Rhodes/ringbearers-repository" target="_blank">Github Repository</a>
            </div>
          </div>


        </div>


        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;