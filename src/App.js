import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import CharactersPage from "./components/pages/CharactersPage";
import ComicsPage from "./components/pages/ComicsPage";
import EventsPage from "./components/pages/EventsPage";
import SeriesPage from "./components/pages/SeriesPage";
import CreatorsPage from "./components/pages/CreatorsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import SingleCharacterPage from "./components/pages/SingleCharacterPage";
import SingleComicsPage from "./components/pages/SingleComicsPage";
import SingleEventPage from "./components/pages/SingleEventPage";
import SingleSeriesPage from "./components/pages/SingleSeriesPage";
import SingleCreatorPage from "./components/pages/SingleCreatorPage";
import SpecificComicsPage from "./components/pages/SpecificComicsPage";
import SpecificCharactersPage from "./components/pages/SpecificCharactersPage";
import SpecificCreatorsPage from "./components/pages/SpecificCreatorsPage";
import SpecificEventsPage from "./components/pages/SpecificEventsPage";
import SpecificSeriesPage from "./components/pages/SpecificSeriesPage";

import "./styles/css/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/marvel/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/marvel/characters" element={<CharactersPage />} />
          <Route
            path="/marvel/characters/:id"
            element={<SingleCharacterPage />}
          />
          <Route path="/marvel/comics" element={<ComicsPage />} />
          <Route path="/marvel/comics/:id" element={<SingleComicsPage />} />
          <Route path="/marvel/events" element={<EventsPage />} />
          <Route path="/marvel/events/:id" element={<SingleEventPage />} />
          <Route path="/marvel/series" element={<SeriesPage />} />
          <Route path="/marvel/series/:id" element={<SingleSeriesPage />} />
          <Route path="/marvel/creators" element={<CreatorsPage />} />
          <Route path="/marvel/creators/:id" element={<SingleCreatorPage />} />
          <Route
            path="/marvel/comics/:name/:id"
            element={<SpecificComicsPage />}
          />
          <Route
            path="/marvel/characters/:name/:id"
            element={<SpecificCharactersPage />}
          />
          <Route
            path="/marvel/creators/:name/:id"
            element={<SpecificCreatorsPage />}
          />
          <Route
            path="/marvel/events/:name/:id"
            element={<SpecificEventsPage />}
          />
          <Route
            path="/marvel/series/:name/:id"
            element={<SpecificSeriesPage />}
          />
          <Route path="/marvel/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
