import { Link, useParams } from "react-router-dom";

function SeriesInfo(props) {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const { series, name } = props;
  const SERIES_ITEMS = series.items.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/series/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));
  return (
    <section className="info-container series-info-container">
      <h3 className="info-title">Series</h3>
      <ol className="info-list">{SERIES_ITEMS}</ol>
      {series.available && series.available > 20 ? (
        <Link to={"/series/" + name + "/" + ID} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default SeriesInfo;
