import { useEffect } from "react";
import SingleSeries from "../layout/series/SingleSeries";

function SingleComicsPage() {
  useEffect(() => {
    document.title = "Marvel | Series";
  }, []);
  return (
    <div className="container">
      <SingleSeries />
    </div>
  );
}

export default SingleComicsPage;
