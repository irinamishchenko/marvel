import { HOME_INFO_CONTENT } from "../../data/home_info_content";

function HomeInfo() {
  const CONTENT_ITEMS = HOME_INFO_CONTENT.map((item) => (
    <li key={item.title.toLowerCase()} className="home-info-list-item">
      <div className="home-info-title-wrapper">
        <h2 className="home-info-title">{item.title}</h2>
      </div>
      <p className="home-info-content">{item.info}</p>
    </li>
  ));
  return (
    <>
      <ul className="home-info-list">{CONTENT_ITEMS}</ul>
    </>
  );
}

export default HomeInfo;
