import moment from "moment";
import "./Header.css";

export default function Header({ allDates }) {
  return (
    <div className="HeaderContainer">
      {allDates.map((d, i) => {
        const weekDay = moment(d, "YYYY-MM-DD").format("dd")[0];
        const day = moment(d, "YYYY-MM-DD").format("D");
        return (
          <div className="DayContainer" key={i}>
            {day == 1 && (
              <h6 className="MonthBegin">
                {moment(d, "YYYY-MM-DD").format("MMMM YYYY")}
              </h6>
            )}
            <h6>{weekDay}</h6>
            <h3>{day}</h3>
          </div>
        );
      })}
    </div>
  );
}
