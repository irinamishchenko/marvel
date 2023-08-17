import { useEffect } from "react";
import SpecificSeries from "./../layout/series/SpecificSeries";

function SpecificSeriesPage() {
  useEffect(() => {
    document.title = "Marvel | Series";
  }, []);

  return (
    <div className="container">
      <SpecificSeries />
    </div>
  );
}

export default SpecificSeriesPage;
