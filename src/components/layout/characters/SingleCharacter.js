import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../data/API_info";
import ComicsInfo from "../comics/ComicsInfo";
import EventsInfo from "../events/EventsInfo";
import SeriesInfo from "../series/SeriesInfo";

function SingleCharacter() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  async function fetchCharacter() {
    axios
      .get(BASE_URL + "/characters/" + ID, {
        params: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => setCharacter(response.data.data.results[0]))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (character) {
    const GENERAL_INFO = (
      <div className="character-main-info-wrapper">
        <img
          className="character-photo"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={character.name}
        />
        <div className="character-description-container">
          <h2 className="character-name">{character.name}</h2>
          {character.description ? (
            <p className="character-description">{character.description}</p>
          ) : null}
        </div>
      </div>
    );
    return (
      <>
        {GENERAL_INFO}
        {character.comics.items.length > 0 ? (
          <ComicsInfo comics={character.comics} name={"characters"} />
        ) : null}
        {character.events.items.length > 0 ? (
          <EventsInfo events={character.events} name={"characters"} />
        ) : null}
        {character.series.items.length > 0 ? (
          <SeriesInfo series={character.series} name={"characters"} />
        ) : null}
      </>
    );
  }
}

export default SingleCharacter;
