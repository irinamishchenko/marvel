import { Link, useParams } from "react-router-dom";

function CharactersInfo(props) {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const { characters, name } = props;
  const CHARACTERS_ITEMS = characters.items.map((character, index) => (
    <li className="info-list-item" key={index}>
      <Link
        to={"/characters/" + character.resourceURI.split("/").splice(6).join()}
      >
        {character.name}
      </Link>
    </li>
  ));
  return (
    <section className="info-container">
      <h3 className="info-title">Characters</h3>
      <ol className="info-list">{CHARACTERS_ITEMS}</ol>
      {characters.available && characters.available > 20 ? (
        <Link to={"/characters/" + name + "/" + ID} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default CharactersInfo;
