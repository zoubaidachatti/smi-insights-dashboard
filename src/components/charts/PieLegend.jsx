import React from "react";

const PieLegend = ({ data }) => {
  return (
    <div className="pie-legend">
      {data.map((li, ind) => {
        return (
          <div className="legend-pie-item" key={"legend_pie_item" + ind}>
            <div className="legend-group">
              <div
                className="legend-circle"
                style={{ borderColor: li.color }}
              ></div>
              {li.title}
            </div>
            <div>{li.amountstr}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PieLegend;
