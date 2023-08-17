import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../data/API_info";
import CharactersInfo from "../characters/CharactersInfo";
import ComicsInfo from "../comics/ComicsInfo";
import CreatorsInfo from "../creators/CreatorsInfo";
import SeriesInfo from "../series/SeriesInfo";

function SingleEvent() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  async function fetchEvent() {
    axios
      .get(BASE_URL + "/events/" + ID, {
        params: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => setEvent(response.data.data.results[0]))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchEvent();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (event) {
    const GENERAL_INFO = (
      <div className="event-main-info-wrapper">
        <img
          className="event-photo"
          src={event.thumbnail.path + "." + event.thumbnail.extension}
          alt={event.title}
        />
        <div className="event-description-container">
          <h2 className="event-title">{event.title}</h2>
          {event.description ? (
            <p className="event-description">{event.description}</p>
          ) : null}
        </div>
      </div>
    );
    return (
      <>
        {GENERAL_INFO}
        {event.characters.items.length > 0 ? (
          <CharactersInfo characters={event.characters} name={"events"} />
        ) : null}
        {event.comics.items.length > 0 ? (
          <ComicsInfo comics={event.comics} name={"events"} />
        ) : null}
        {event.creators.items.length > 0 ? (
          <CreatorsInfo creators={event.creators} name={"events"} />
        ) : null}
        {event.series.items.length > 0 ? (
          <SeriesInfo series={event.series} name={"events"} />
        ) : null}
      </>
    );
  }
}

export default SingleEvent;
