import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../data/nav_links";

function Navigation(props) {
  const isMenuActive = props.isMenuActive;
  const NAV_ITEMS = NAV_LINKS.map((item) => (
    <li key={item.link}>
      <NavLink to={item.path} className="navigation-item">
        {item.link}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul
        className={
          isMenuActive ? "navigation" : "navigation navigation-inactive"
        }
      >
        {NAV_ITEMS}
      </ul>
    </nav>
  );
}

export default Navigation;
