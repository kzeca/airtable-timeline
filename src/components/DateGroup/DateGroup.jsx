import { rangeValue } from "../../utils/rangeValue";
import "./DateGroup.css";

export default function DateGroup({ item }) {
  if (item) {
    return (
      <div
        className="DateGroupContainer"
        style={{
          width: `${
            rangeValue(item.start, item.end) * 107 +
            (rangeValue(item.start, item.end) == 0 ? 107 : 0)
          }px`,
        }}
      >
        <span>{item.name}</span>
      </div>
    );
  }
  return;
}
