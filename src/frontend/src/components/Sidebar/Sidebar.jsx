import css from './Sidebar.module.css';
import { MdLocalMovies } from "react-icons/md";
import { GiCharacter } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {


  return (
    <div className={css.container}>

      <img src="../../public/logo.png" alt="logo" className={css.logo} />


      <div className={css.menu}>
        <NavLink
          to="/dashboard/:movieName"
          className={css.item}
          title={"Movies"}
        >
          <MdLocalMovies size={30} />
        </NavLink>
                
        <NavLink
          to="/character/:characterName"
          className={css.item}
          title="Characters"
        >
          <GiCharacter size={30} />
        </NavLink>

        <NavLink
          to="/board"
          className={css.item}
          title="Trello Board"
        >
          <FaTasks size={30} />
        </NavLink>
        </div>
    </div>
    )
}

export default Sidebar