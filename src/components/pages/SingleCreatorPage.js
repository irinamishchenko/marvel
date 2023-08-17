import { useEffect } from "react";
import SingleCreator from "../layout/creators/SingleCreator";

function SingleCreatorPage() {
  useEffect(() => {
    document.title = "Marvel | Creators";
  }, []);
  return (
    <div className="container">
      <SingleCreator />
    </div>
  );
}

export default SingleCreatorPage;
