import "./Timeline.css";
import DateGroup from "../DateGroup/DateGroup";
import { generateFullRage } from "../../utils/generateFullRange";
import moment from "moment";
import { rangeValue } from "../../utils/rangeValue";

export default function Timeline({ groupedDates, start, groupIndex }) {
  return (
    <div className="TimelineContainer">
      <div
        className="AdjustForRange"
        style={{
          minWidth: `${
            rangeValue(moment("2021-01-01"), moment(start)) * 107
          }px`,
        }}
      >
        <span>Lane {groupIndex + 1}</span>
      </div>
      <div className="TimelineContentMin">
        {generateFullRage(
          moment(groupedDates[0].start),
          moment(groupedDates[groupedDates.length - 1].end)
        ).map((item, index) => {
          return (
            <div style={{ width: "107px" }} key={index}>
              <DateGroup item={groupedDates.find((d) => d.start == item)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
