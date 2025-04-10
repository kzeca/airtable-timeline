import "./App.css";
import { assignLanes } from "./utils/assignLanes";
import Timeline from "./components/Timeline/Timeline";
import { useContext } from "react";
import Header from "./components/Header/Header";
import { generateFullRage } from "./utils/generateFullRange";
import moment from "moment";
import DatesContext from "./context/dateContext";

function App() {
  const { dates } = useContext(DatesContext);

  return (
    <div className="page">
      <h1 style={{ marginBottom: "3rem" }}>Airtable timeline</h1>

      <div className="content">
        <Header
          allDates={generateFullRage(
            moment("2021-01-01"),
            moment("2021-05-31")
          )}
        />
        {assignLanes(dates).map((lanes, index) => {
          return (
            <Timeline
              key={index}
              groupedDates={lanes}
              agendaLength={
                generateFullRage(moment("2021-01-01"), moment("2021-05-31"))
                  .length
              }
              groupIndex={index}
              start={lanes[0].start}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
