import { SOCIAL_LINKS } from "../../data/social_links";
import sprite from "../../images/sprite.svg";

function Socials() {
  const SOCIAL_LINKS_ITEMS = SOCIAL_LINKS.map((item, index) => (
    <li className="socials-list-item" key={index}>
      <a href={item.link} target="_blank">
        <svg>
          <use href={sprite + item.icon} />
        </svg>
      </a>
    </li>
  ));
  return <ul className="socials-list">{SOCIAL_LINKS_ITEMS}</ul>;
}

export default Socials;
