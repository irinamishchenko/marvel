import { useEffect } from "react";
import SpecificCreators from "./../layout/creators/SpecificCreators";

function SpecificCreatorsPage() {
  useEffect(() => {
    document.title = "Marvel | Creators";
  }, []);
  return (
    <div className="container">
      <SpecificCreators />
    </div>
  );
}

export default SpecificCreatorsPage;
