import { useEffect } from "react";
import SingleComics from "../layout/comics/SingleComics";

function SingleComicsPage() {
  useEffect(() => {
    document.title = "Marvel | Comics";
  }, []);
  return (
    <div className="container">
      <SingleComics />
    </div>
  );
}

export default SingleComicsPage;
