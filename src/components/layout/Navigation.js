import { NavLink } from "react-router-dom";

const LINKS = [
  {
    link: "Home",
    path: "/marvel/",
  },
  {
    link: "Characters",
    path: "/marvel/characters",
  },
  {
    link: "Comics",
    path: "/marvel/comics",
  },
  {
    link: "Events",
    path: "/marvel/events",
  },
  {
    link: "Series",
    path: "/marvel/series",
  },
  {
    link: "Creators",
    path: "/marvel/creators",
  },
];

function Navigation(props) {
  const isMenuActive = props.isMenuActive;
  const NAV_ITEMS = LINKS.map((item) => (
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
