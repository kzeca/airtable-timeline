import { createContext, useContext, useState } from "react";
import { sortDates } from "../utils/sortDates";
import timelineItems from "../data/timelineItems";

const DatesContext = createContext(undefined);

export function useDatesProvider() {
  const context = useContext(DatesContext);

  if (context === undefined) {
    throw new Error("useDatesContext must be used inside DatesProvider");
  }

  return context;
}

export function DatesProvider({ children }) {
  const [dates, setDates] = useState(sortDates(timelineItems));

  const value = {
    dates,
    setDates,
  };

  return (
    <DatesContext.Provider value={value}>{children}</DatesContext.Provider>
  );
}

export default DatesContext;
